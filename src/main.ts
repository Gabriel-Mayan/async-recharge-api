import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/modules/app/app.module';
import { corsConfig } from './app/config/cors.config';

const port = parseInt(process.env.PORT || '3000', 10);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsConfig);

  app.listen(port, () => {
    console.log('Server is Running');
  });
}

bootstrap();
