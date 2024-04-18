import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { CreateOrderDto } from './dto/createOrder.dto'
import { Order, OrderStatus } from './entities/order.entity'
import { OrdersService } from './orders.service'

@Controller()
export class OrdersController {
	constructor(private readonly ordersService: OrdersService) {}

	@Get('orders')
	async findAll(): Promise<Order[]> {
		return await this.ordersService.findAll()
	}

	@Get('order/:id')
	async findOrder(@Param('id') id: string): Promise<Order> {
		return await this.ordersService.findOrder(id)
	}

	@Post('orders')
	async createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
		return await this.ordersService.createOrder(createOrderDto)
	}

	@MessagePattern('payments')
	async complete(@Payload() message: any) {
		await this.ordersService.complete(message.order_id, {
			status:
				message.status === 'APPROVED'
					? OrderStatus.PAYED
					: OrderStatus.CANCELLED,
		})
	}
}
