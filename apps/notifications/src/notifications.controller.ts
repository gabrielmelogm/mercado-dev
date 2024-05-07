import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/createNotification.dto';

@Controller()
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get(':id')
  async getAll(@Param('id') id: string) {
    return await this.notificationsService.getAll(id)
  }

  @Post()
  async create(@Body() createNotificationDto: CreateNotificationDto) {
    return await this.notificationsService.CreateNotification(createNotificationDto)
  }
}
