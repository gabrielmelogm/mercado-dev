import { randomUUID } from 'node:crypto'
import { Injectable } from '@nestjs/common';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { dynamoDBClient } from './db/dynamoDbClient.service';
import { NotificationsRepository } from './repositories/notifications.repository';
import { CreateNotificationDto } from './dto/createNotification.dto';
import { UpdateNotificationDto } from './dto/updateNotification.dto';

@Injectable()
export class NotificationsService {
  constructor(private readonly notificationRepository: NotificationsRepository) {}

  async CreateNotification(notification: CreateNotificationDto) {
    return await this.notificationRepository.CreateNotification(notification)
  }

  async getAll(userId: string) {
    return await this.notificationRepository.GetNotifications(userId)
  }
  
  async updateStatus(updateIsReadDto: UpdateNotificationDto) {
    return await this.notificationRepository.UpdateReadNotification(updateIsReadDto.userId, updateIsReadDto.notificationId)
  }
}
