import { Controller, Get } from '@nestjs/common'
import type { OrdersService } from './orders.service'

@Controller()
export class OrdersController {
	constructor(private readonly ordersService: OrdersService) {}

	@Get()
	getHello(): string {
		return this.ordersService.getHello()
	}
}
