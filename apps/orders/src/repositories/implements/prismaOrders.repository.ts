import { Injectable } from '@nestjs/common'
import { CreateOrderDto } from '../../dto/createOrder.dto'
import { Order, OrderStatus } from '../../entities/order.entity'
import { PrismaService } from '../../prisma/prisma.service'
import { OrdersRepository } from '../orders.repository'

@Injectable()
export class PrismaOrdersRepository implements OrdersRepository {
	constructor(private readonly prisma: PrismaService) {}

	async createOrder(order: CreateOrderDto): Promise<Order> {
		return await this.prisma.orders.create({
			data: {
				...order,
				status: OrderStatus.PENDING,
			},
		})
	}
}
