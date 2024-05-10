import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CreateOrderDto } from '../interfaces/dto/orders/createOrder.dto'
import { OrdersService } from '../services/orders.service'

@ApiTags('orders')
@Controller()
export class OrdersController {
	constructor(private readonly ordersService: OrdersService) {}

	@Get('orders')
	async getAll() {
		return await this.ordersService.findAll()
	}

	@Get('order/:id')
	async getById(@Param('id') id: string) {
		return await this.ordersService.findOrder(id)
	}

	@Post('orders')
	async createProduct(@Body() createOrderDto: CreateOrderDto) {
		return await this.ordersService.createOrder(createOrderDto)
	}
}
