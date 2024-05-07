import { Injectable } from "@nestjs/common";
import { randomUUID } from "node:crypto";
import { CreateNotificationDto } from "../../dto/createNotification.dto";
import { Notification } from "../../entities/Notification.entity";
import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { dynamoDBClient } from "../../db/dynamoDbClient.service";
import { NotificationsRepository } from "../notifications.repository";

@Injectable()
export class DynamoNotificationsRepository implements NotificationsRepository {
  constructor(
    private readonly dynamoClient: DocumentClient,
  ) {
    this.dynamoClient = dynamoDBClient()
  }

  private tbName: string = 'notifications'

  async CreateNotification(notification: CreateNotificationDto): Promise<Notification> {
    const newNotification: Notification = {
      id: randomUUID(),
      userId: notification.userId,
      title: notification.title,
      content: notification.content
    }

    await this.dynamoClient.put({
      TableName: this.tbName,
      Item: newNotification
    }).promise()

    return newNotification
  }

  async GetNotifications(userId: string): Promise<Notification[]> {
    const data = await this.dynamoClient.query({
      TableName: this.tbName,
      IndexName: 'userId_index',
      KeyConditionExpression: '#userId = :userId',
      ExpressionAttributeNames: {
        '#userId': 'userId'
      },
      ExpressionAttributeValues: {
        ':userId': userId
      }
    }).promise()

    const notifications = data.Items as Notification[]

    return notifications
  }

  UpdateReadNotification(userId: string, id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}