import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { setupSwagger } from '../../../docs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.useGlobalPipes(
		new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
	)
	setupSwagger(app)
	await app.listen(8080)
}
bootstrap()
