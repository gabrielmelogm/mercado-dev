import { Inject, Injectable } from '@nestjs/common'
import { ClientKafka } from '@nestjs/microservices'
import { lastValueFrom } from 'rxjs'
import { CreateOrderDto } from './dto/createOrder.dto'
import { UpdateOrderDto } from './dto/updateOrder.dto'
import { Order } from './entities/order.entity'
import { OrdersRepository } from './repositories/orders.repository'

@Injectable()
export class OrdersService {
	constructor(
		private readonly ordersRepository: OrdersRepository,
		@Inject('ORDERS_SERVICE')
		private kafkaClient: ClientKafka,
	) {}

	async findOrder(id: string): Promise<Order> {
		return await this.ordersRepository.findOne(id)
	}

	async createOrder(order: CreateOrderDto): Promise<Order> {
		const createdOrder = await this.ordersRepository.createOrder(order)

		await lastValueFrom(
			this.kafkaClient.emit('orders', {
				order_id: createdOrder.id,
				product_id: createdOrder.product_id,
				price: createdOrder.price * createdOrder.quantity,
				status: createdOrder.status,
				createdAt: createdOrder.createdAt,
				updatedAt: createdOrder.updatedAt,
			}),
		)

		return createdOrder
	}

	async complete(id: string, updateOrderDto: UpdateOrderDto) {
		return await this.ordersRepository.updateOrder(id, updateOrderDto)
	}
}
