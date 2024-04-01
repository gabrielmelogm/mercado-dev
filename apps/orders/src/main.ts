import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import 'reflect-metadata'
import { OrdersModule } from './orders.module'

async function bootstrap() {
	const app = await NestFactory.create(OrdersModule)
	app.useGlobalPipes(
		new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
	)
	await app.listen(3001)
}
bootstrap()
