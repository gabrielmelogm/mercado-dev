import { Injectable } from '@nestjs/common'
import { CreateProductDto } from '../../dto/createProduct.dto'
import { Product } from '../../entities/product.entity'
import { PrismaService } from '../../prisma/prisma.service'
import { ProductsRepository } from '../products.repository'

@Injectable()
export class PrismaProductsRepository implements ProductsRepository {
	constructor(private readonly prisma: PrismaService) {}

	async findAll(): Promise<Product[]> {
		return await this.prisma.products.findMany()
	}

	async findOne(id: string): Promise<Product> {
		return await this.prisma.products.findFirst({
			where: {
				id,
			},
		})
	}

	async createProduct(product: CreateProductDto): Promise<Product> {
		return await this.prisma.products.create({
			data: product,
		})
	}
}
