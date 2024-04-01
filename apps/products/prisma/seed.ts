import { fakerPT_BR as faker } from '@faker-js/faker'
import { Product } from '../src/entities/product.entity'
import { PrismaClient } from '.prisma/client/products'

async function main() {
	console.log('Seed products starting...')
	const prisma = new PrismaClient()

	for (let index = 0; index <= 10; index++) {
		const product: Product = {
			title: faker.commerce.productName(),
			description: faker.commerce.productDescription(),
			price: Number.parseFloat(faker.commerce.price()),
			thumb: faker.image.url(),
		}

		try {
			await prisma.products.create({
				data: product,
			})
		} catch (error) {
			console.error('Seeding error')
			return
		}
	}

	console.log('Seed products successfully')
}

main()
