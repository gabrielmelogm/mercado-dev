import { IsNotEmpty, IsString } from "class-validator";

export class UpdateNotificationDto {
  @IsString()
  @IsNotEmpty()
  userId: string
  
  @IsString()
  @IsNotEmpty()
  notificationId: string
}