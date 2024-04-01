import { Injectable } from '@nestjs/common'
import { Order } from './entities/order.entity'

@Injectable()
export class OrdersService {
	async create(): Promise<Order> {
		return 'Hello World!'
	}
}
