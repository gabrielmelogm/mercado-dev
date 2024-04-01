import { Injectable } from '@nestjs/common'
import { CreateOrderDto } from './dto/createOrder.dto'
import { Order } from './entities/order.entity'
import { OrdersRepository } from './repositories/orders.repository'

@Injectable()
export class OrdersService {
	constructor(private readonly ordersRepository: OrdersRepository) {}

	async findOrder(id: string): Promise<Order> {
		return await this.ordersRepository.findOne(id)
	}

	async createOrder(order: CreateOrderDto): Promise<Order> {
		return await this.ordersRepository.createOrder(order)
	}
}
