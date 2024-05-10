import { ConfigModule } from '@nestjs/config'
import { z } from 'zod'

ConfigModule.forRoot({
	envFilePath: './apps/notifications/.env',
})

const envSchema = z.object({
	REGION: z.string(),
	ENDPOINT_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
