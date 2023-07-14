import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ShoppingcartsModule } from './modules/shoppingCarts/shoppingcarts.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ShoppingcartsModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();
