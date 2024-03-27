import { CreateProductDto } from '../dto/createProduct.dto'
import { Product } from '../entities/product.entity'

export abstract class ProductsRepository {
	abstract findAll(): Promise<Product[]>
	abstract findOne(id: string): Promise<Product>
	abstract createProduct(product: CreateProductDto): Promise<Product>
}
