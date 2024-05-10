import { randomUUID } from 'node:crypto'
import { Injectable } from '@nestjs/common'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { dynamoDBClient } from '../../db/dynamoDbClient.service'
import { CreateNotificationDto } from '../../dto/createNotification.dto'
import { Notification } from '../../entities/Notification.entity'
import { NotificationsRepository } from '../notifications.repository'

@Injectable()
export class DynamoNotificationsRepository implements NotificationsRepository {
	constructor(private readonly dynamoClient: DocumentClient) {
		this.dynamoClient = dynamoDBClient()
	}

	private tbName = 'notifications'

	async CreateNotification(
		notification: CreateNotificationDto,
	): Promise<Notification> {
		const newNotification: Notification = {
			id: randomUUID(),
			userId: notification.userId,
			title: notification.title,
			content: notification.content,
		}

		await this.dynamoClient
			.put({
				TableName: this.tbName,
				Item: newNotification,
			})
			.promise()

		return newNotification
	}

	async GetNotifications(userId: string): Promise<Notification[]> {
		const data = await this.dynamoClient
			.query({
				TableName: this.tbName,
				IndexName: 'userId_index',
				KeyConditionExpression: '#userId = :userId',
				ExpressionAttributeNames: {
					'#userId': 'userId',
				},
				ExpressionAttributeValues: {
					':userId': userId,
				},
			})
			.promise()

		const notifications = data.Items as Notification[]

		return notifications
	}

	async UpdateReadNotification(
		userId: string,
		id: string,
	): Promise<Notification> {
		const data = await this.dynamoClient
			.update({
				TableName: this.tbName,
				Key: {
					id: id,
				},
				UpdateExpression: 'set #readAt = :readAt',
				ConditionExpression: '#userId = :userId',
				ExpressionAttributeNames: {
					'#readAt': 'readAt',
					'#userId': 'userId',
				},
				ExpressionAttributeValues: {
					':readAt': String(new Date().toISOString()),
					':userId': userId,
				},
				ReturnValues: 'ALL_NEW',
			})
			.promise()

		const notification = data.Attributes as Notification

		return notification
	}
}
