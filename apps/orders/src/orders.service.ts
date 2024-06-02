import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
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
		private readonly rmqClient: ClientProxy,
	) {
		this.rmqClient.connect()
	}

	async findAll(): Promise<Order[]> {
		return await this.ordersRepository.findAll()
	}

	async findOrder(id: string): Promise<Order> {
		return await this.ordersRepository.findOne(id)
	}

	async createOrder(order: CreateOrderDto): Promise<Order> {
		const createdOrder = await this.ordersRepository.createOrder(order)

		const message = {
			order_id: createdOrder.id,
			product_id: createdOrder.product_id,
			price: createdOrder.price * createdOrder.quantity,
			status: createdOrder.status,
			createdAt: createdOrder.createdAt,
			updatedAt: createdOrder.updatedAt,
		}

		const _notification = {
			title: `New order Nº: ${createdOrder.id}`,
			content: `Quantity: ${createdOrder.quantity}, Value: ${createdOrder.price}`,
			userId: createdOrder.product_id,
		}

		await lastValueFrom(this.rmqClient.emit('create_order', message))

		return createdOrder
	}

	async complete(id: string, updateOrderDto: UpdateOrderDto) {
		return await this.ordersRepository.updateOrder(id, updateOrderDto)
	}
}
