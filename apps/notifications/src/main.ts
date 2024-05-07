import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { NotificationsModule } from './notifications.module'

async function bootstrap() {
	const app = await NestFactory.create(NotificationsModule)
	app.useGlobalPipes(
		new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
	)
	await app.listen(3003)
}
bootstrap()
