import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { CreateProductDto } from './dto/createProduct.dto'
import { Product } from './entities/product.entity'
import { ProductsService } from './products.service'

@Controller()
export class ProductsController {
	constructor(private readonly productsService: ProductsService) {}

	@MessagePattern('get_products')
	async getAll(): Promise<Product[]> {
		const products = await this.productsService.getAll()
		return products
	}

	@MessagePattern('get_product_by_id')
	async getOne(@Payload() data: { id: string }): Promise<Product> {
		return await this.productsService.getOne(data.id)
	}

	@MessagePattern('get_recommended_product')
	async getRecommended(): Promise<Product> {
		return await this.productsService.getRecommended()
	}

	@MessagePattern('create_product')
	async createProduct(
		@Payload() createProductDto: CreateProductDto,
	): Promise<Product> {
		return await this.productsService.createProduct(createProductDto)
	}
}
