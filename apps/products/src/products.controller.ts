import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CreateProductDto } from './dto/createProduct.dto'
import { Product } from './entities/product.entity'
import { ProductsService } from './products.service'

@Controller()
export class ProductsController {
	constructor(private readonly productsService: ProductsService) {}

	@Get('products')
	async getAll(): Promise<Product[]> {
		const products = await this.productsService.getAll()
		return products
	}

	@Get('product/get/:id')
	async getOne(@Param('id') id: string): Promise<Product> {
		return await this.productsService.getOne(id)
	}

	@Get('product/recommended')
	async getRecommended(): Promise<Product> {
		return await this.productsService.getRecommended()
	}

	@Post('products')
	async createProduct(
		@Body() createProductDto: CreateProductDto,
	): Promise<Product> {
		return await this.productsService.createProduct(createProductDto)
	}
}
