import { CreateOrderDto } from '../dto/createOrder.dto'
import { Order } from '../entities/order.entity'

export abstract class OrdersRepository {
	abstract createOrder(order: CreateOrderDto): Promise<Order>
}
