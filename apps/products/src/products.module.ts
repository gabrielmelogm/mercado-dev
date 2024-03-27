import { Module } from '@nestjs/common'
import { PrismaModule } from './prisma/prisma.module'
import { ProductsController } from './products.controller'
import { ProductsService } from './products.service'
import { PrismaProductsRepository } from './repositories/implements/prismaProducts.repository'
import { ProductsRepository } from './repositories/products.repository'

@Module({
	imports: [PrismaModule],
	controllers: [ProductsController],
	providers: [
		ProductsService,
		{
			provide: ProductsRepository,
			useClass: PrismaProductsRepository,
		},
	],
})
export class ProductsModule {}
