import { Injectable } from '@nestjs/common'
import { CreateProductDto } from './dto/createProduct.dto'
import { Product } from './entities/product.entity'
import { ProductsRepository } from './repositories/products.repository'

@Injectable()
export class ProductsService {
	constructor(private readonly productsRepository: ProductsRepository) {}

	async getAll(): Promise<Product[]> {
		return await this.productsRepository.findAll()
	}

	async getOne(id: string): Promise<Product> {
		return await this.productsRepository.findOne(id)
	}

	async createProduct(data: CreateProductDto): Promise<Product> {
		return await this.productsRepository.createProduct(data)
	}

	async getRecommended(): Promise<Product> {
		const products = await this.productsRepository.findAll()
		return products[0]
	}
}
