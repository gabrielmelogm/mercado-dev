import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const buildSwagger = (app) => {
  const config = new DocumentBuilder()
    .setTitle('Mercado dev')
    .setDescription('The api for mercado dev')
    .setVersion('1.0')
    .build();

  return SwaggerModule.createDocument(app, config);
}

export const setupSwagger = (app) => {
  const document = buildSwagger(app);
  SwaggerModule.setup('api', app, document);
};