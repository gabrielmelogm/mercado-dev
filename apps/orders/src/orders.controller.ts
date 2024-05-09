import { Controller } from '@nestjs/common'
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices'
import { CreateOrderDto } from './dto/createOrder.dto'
import { Order, OrderStatus } from './entities/order.entity'
import { OrdersService } from './orders.service'

@Controller()
export class OrdersController {
	constructor(private readonly ordersService: OrdersService) {}

	@MessagePattern('get_orders')
	async findAll(): Promise<Order[]> {
		return await this.ordersService.findAll()
	}

	@MessagePattern('get_order_by_id')
	async findOrder(@Payload() data: { id: string }): Promise<Order> {
		return await this.ordersService.findOrder(data.id)
	}

	@MessagePattern('create_order')
	async createOrder(@Payload() createOrderDto: CreateOrderDto): Promise<Order> {
		return await this.ordersService.createOrder(createOrderDto)
	}

	@EventPattern('payments')
	async complete(@Payload() data: any) {
		const message = data

		await this.ordersService.complete(message.order_id, {
			status:
				message.status === 'APPROVED'
					? OrderStatus.PAYED
					: OrderStatus.CANCELLED,
		})
	}
}
