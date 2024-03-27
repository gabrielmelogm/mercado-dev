import { Injectable } from '@nestjs/common'
import { CreateProductDto } from './dto/createProduct.dto'
import { Product } from './entities/product.entity'
import { PrismaService } from './prisma/prisma.service'

@Injectable()
export class ProductsService {
	constructor(private readonly prismaService: PrismaService) {}

	async getAll(): Promise<Product[]> {
		return await this.prismaService.products.findMany()
	}

	async getOne(id: string): Promise<Product> {
		return await this.prismaService.products.findFirst({
			where: {
				id,
			},
		})
	}

	async createProduct(data: CreateProductDto): Promise<Product> {
		return await this.prismaService.products.create({
			data,
		})
	}
}
