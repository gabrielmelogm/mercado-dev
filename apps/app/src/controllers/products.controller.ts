import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AuthGuard } from '../guards/auth.guard'
import { CreateProductDto } from '../interfaces/dto/products/createProduct.dto'
import { ProductsService } from '../services/products.service'

@UseGuards(AuthGuard)
@ApiTags('products')
@Controller()
export class ProductsController {
	constructor(private readonly productsService: ProductsService) {}

	@Get('products')
	async getAllProducts() {
		return await this.productsService.getProducts()
	}

	@Get('product/get/:id')
	async getProductById(@Param('id') id: string) {
		return await this.productsService.getProductById(id)
	}

	@Get('/product/recommended')
	async getRecommendedProduct() {
		return await this.productsService.getRecommendedProduct()
	}

	@Post('products')
	async createProduct(@Body() createProductDto: CreateProductDto) {
		return await this.productsService.createProduct(createProductDto)
	}
}
