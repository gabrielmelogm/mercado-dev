import { fakerPT_BR as faker } from '@faker-js/faker'
import { Test, TestingModule } from '@nestjs/testing'
import { CreateOrderDto } from './dto/createOrder.dto'
import { Order, OrderStatus } from './entities/order.entity'
import { OrdersService } from './orders.service'
import { PrismaModule } from './prisma/prisma.module'
import { PrismaOrdersRepository } from './repositories/implements/prismaOrders.repository'
import { OrdersRepository } from './repositories/orders.repository'

describe('Orders Service', () => {
	let ordersService: OrdersService
	let ordersRepository: OrdersRepository

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			imports: [PrismaModule],
			providers: [
				OrdersService,
				{
					provide: OrdersRepository,
					useClass: PrismaOrdersRepository,
				},
			],
		}).compile()

		ordersService = app.get<OrdersService>(OrdersService)
		ordersRepository = app.get<OrdersRepository>(OrdersRepository)
	})

	it('should be defined', () => {
		expect(ordersService).toBeDefined()
	})

	describe('findOrder', () => {
		it('should return a order by id', async () => {
			const createOrderResponse: Order = {
				id: faker.string.uuid(),
				price: Number.parseFloat(faker.commerce.price()),
				product_id: faker.string.uuid(),
				status: OrderStatus.PENDING,
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			}

			jest
				.spyOn(ordersRepository, 'findOne')
				.mockResolvedValueOnce(createOrderResponse)

			await expect(
				ordersService.findOrder(createOrderResponse.id),
			).resolves.toEqual(createOrderResponse)
		})
	})

	describe('createOrder', () => {
		it('should create a order', async () => {
			const createOrderDto: CreateOrderDto = {
				price: Number.parseFloat(faker.commerce.price()),
				product_id: faker.string.uuid(),
			}

			const createOrderResponse: Order = {
				id: faker.string.uuid(),
				price: createOrderDto.price,
				product_id: createOrderDto.product_id,
				status: OrderStatus.PENDING,
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			}

			jest
				.spyOn(ordersRepository, 'createOrder')
				.mockResolvedValueOnce(createOrderResponse)

			await expect(
				ordersRepository.createOrder(createOrderDto),
			).resolves.toEqual(createOrderResponse)

			expect(createOrderDto.price).toEqual(createOrderResponse.price)
			expect(createOrderDto.product_id).toEqual(createOrderResponse.product_id)

			expect(createOrderResponse.status).toEqual(OrderStatus.PENDING)
			expect(createOrderResponse).toHaveProperty('createdAt')
			expect(createOrderResponse).toHaveProperty('updatedAt')
		})
	})
})
