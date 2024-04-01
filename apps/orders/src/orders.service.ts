import { Inject, Injectable } from '@nestjs/common'
import { ClientKafka } from '@nestjs/microservices'
import { lastValueFrom } from 'rxjs'
import { CreateOrderDto } from './dto/createOrder.dto'
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

		await lastValueFrom(this.kafkaClient.emit('orders', order))

		return createdOrder
	}
}
