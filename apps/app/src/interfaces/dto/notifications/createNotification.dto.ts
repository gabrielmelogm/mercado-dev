import { IsNotEmpty, IsString } from "class-validator";

export class CreateNotificationDto {
  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsNotEmpty()
  content: string

  @IsString()
  @IsNotEmpty()
  userId: string
}