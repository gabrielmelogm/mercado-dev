import * as fs from 'node:fs'
import * as YAML from 'yaml'

import { NestFactory } from "@nestjs/core"
import { AppModule } from "../apps/app/src/app.module"
import { buildSwagger } from "./swagger"

export const setupSwaggerDoc = async () => {
  const app = await NestFactory.create(AppModule)

  const document = buildSwagger(app)
  fs.writeFileSync('./docs/openapi.yaml', YAML.stringify(document))
}

setupSwaggerDoc()