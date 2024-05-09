import { Inject, Injectable } from "@nestjs/common";
import { SERVICE } from "../config/services.enum";
import { ClientProxy } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";
import { CreateOrderDto } from "../interfaces/dto/orders/createOrder.dto";
import { Order } from "../interfaces/order.entity";

@Injectable()
export class OrdersService {
  constructor(
    @Inject(SERVICE.ORDERS)
    private readonly ordersServiceClient: ClientProxy
  ) {}

  async createOrder(order: CreateOrderDto) {
    const newOrder = await firstValueFrom(
      this.ordersServiceClient.send('create_order', order)
    )

    return newOrder
  }
  
  async findAll(): Promise<Order[]> {
    const orders = await firstValueFrom(
      this.ordersServiceClient.send('get_orders', {})
    )

    return orders
	}

	async findOrder(id: string): Promise<Order> {
    const order = await firstValueFrom(
      this.ordersServiceClient.send('get_order_by_id', { id })
    )

    return order
	}
}