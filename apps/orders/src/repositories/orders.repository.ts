import { CreateOrderDto } from '../dto/createOrder.dto'
import { UpdateOrderDto } from '../dto/updateOrder.dto'
import { Order } from '../entities/order.entity'

export abstract class OrdersRepository {
	abstract findOne(id: string): Promise<Order>
	abstract createOrder(order: CreateOrderDto): Promise<Order>
	abstract updateOrder(id: string, order: UpdateOrderDto): Promise<Order>
}
