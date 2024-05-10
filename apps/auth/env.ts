import { ConfigModule } from '@nestjs/config'
import { z } from 'zod'

ConfigModule.forRoot({
	envFilePath: './apps/auth/.env',
})

const nodeEnv = z.enum(['development', 'production', 'test'])

const envSchema = z.object({
	NODE_ENV: nodeEnv.default('development'),
	JWT_KEY: z.string(),
	SESSION_EXPIRES: z.coerce.number(),
})

export const env = envSchema.parse(process.env)
