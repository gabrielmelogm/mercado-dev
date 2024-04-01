import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CreateOrderDto } from './dto/createOrder.dto'
import { Order } from './entities/order.entity'
import { OrdersService } from './orders.service'

@Controller()
export class OrdersController {
	constructor(private readonly ordersService: OrdersService) {}

	@Get('order/:id')
	async findOrder(@Param('id') id: string): Promise<Order> {
		return await this.ordersService.findOrder(id)
	}

	@Post('orders')
	async createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
		return await this.ordersService.createOrder(createOrderDto)
	}
}
