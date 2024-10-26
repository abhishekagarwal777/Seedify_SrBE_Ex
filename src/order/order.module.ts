// src/order/order.module.ts
import { Module } from '@nestjs/common';
import { OrderController } from './infrastructure/controllers/order.controller';
import { OrderService } from './application/services/order.service';
import { InMemoryOrderRepository } from './infrastructure/repositories/in-memory-order.repository';

@Module({
  controllers: [OrderController],
  providers: [
    OrderService,
    {
      provide: 'OrderRepository',
      useClass: InMemoryOrderRepository,
    },
  ],
})
export class OrderModule {}





// import { Module } from '@nestjs/common';

// @Module({
//   imports: [],
//   controllers: [],
//   providers: [],
// })
// export class OrderModule {}
