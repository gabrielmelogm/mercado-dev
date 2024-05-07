import { CreateNotificationDto } from "../dto/createNotification.dto";
import { Notification } from "../entities/Notification.entity";

export abstract class NotificationsRepository {
  abstract CreateNotification(notification: CreateNotificationDto): Promise<Notification>
  abstract GetNotifications(userId: string): Promise<Notification[]>
  abstract UpdateReadNotification(userId: string, id: string): Promise<void>
}