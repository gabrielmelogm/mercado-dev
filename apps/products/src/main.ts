import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import 'reflect-metadata'
import { ProductsModule } from './products.module'

async function bootstrap() {
	const app = await NestFactory.create(ProductsModule)
	app.useGlobalPipes(
		new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
	)
	await app.listen(3000)
}
bootstrap()
