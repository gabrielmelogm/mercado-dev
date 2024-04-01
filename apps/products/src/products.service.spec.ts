import { faker } from '@faker-js/faker'
import { Test, TestingModule } from '@nestjs/testing'
import { Product } from './entities/product.entity'
import { PrismaModule } from './prisma/prisma.module'
import { ProductsService } from './products.service'
import { PrismaProductsRepository } from './repositories/implements/prismaProducts.repository'
import { ProductsRepository } from './repositories/products.repository'

function generateFakeProduct(): Product {
	return {
		id: faker.string.uuid(),
		title: faker.commerce.productName(),
		description: faker.commerce.productDescription(),
		price: Number.parseFloat(faker.commerce.price()),
		thumb: faker.image.url(),
		createdAt: faker.date.past(),
		updatedAt: faker.date.recent(),
	}
}

describe('Products Service', () => {
	let productsService: ProductsService
	let productsRepository: ProductsRepository

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			imports: [PrismaModule],
			providers: [
				ProductsService,
				{
					provide: ProductsRepository,
					useClass: PrismaProductsRepository,
				},
			],
		}).compile()

		productsService = app.get<ProductsService>(ProductsService)
		productsRepository = app.get<ProductsRepository>(ProductsRepository)
	})

	it('should be defined', () => {
		expect(productsService).toBeDefined()
	})

	describe('getAll', () => {
		it('should return all products', async () => {
			const products: Product[] = []

			for (let i = 0; i < 5; i++) {
				products.push(generateFakeProduct())
			}

			jest.spyOn(productsRepository, 'findAll').mockResolvedValueOnce(products)

			await expect(productsService.getAll()).resolves.toEqual(products)
		})

		it('should return an empty array if without data', async () => {
			const products: Product[] = []

			jest.spyOn(productsRepository, 'findAll').mockResolvedValueOnce(products)

			await expect(productsRepository.findAll()).resolves.toEqual([])
		})
	})

	describe('getOne', () => {
		it('should return a product by id', async () => {
			const product: Product = generateFakeProduct()

			jest.spyOn(productsRepository, 'findOne').mockResolvedValueOnce(product)

			await expect(productsRepository.findOne(product.id)).resolves.toEqual(
				product,
			)
		})

		it('should return null if send a wrong id', async () => {
			const wrongId: string = 'fakeId'

			jest.spyOn(productsRepository, 'findOne').mockResolvedValue(null)

			await expect(productsRepository.findOne(wrongId)).resolves.toEqual(null)
		})
	})
})
