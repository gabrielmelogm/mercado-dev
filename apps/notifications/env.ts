import { z } from "zod"
import { ConfigModule } from "@nestjs/config";

ConfigModule.forRoot({
  envFilePath: './apps/notifications/.env'
})

const envSchema = z.object({
  REGION: z.string(),
  ENDPOINT_URL: z.string().url()
})

export const env = envSchema.parse(process.env)
