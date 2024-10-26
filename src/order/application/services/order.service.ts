// src/order/application/services/order.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { OrderRepository } from '../../domain/repository/order.repository';
import { Order } from '../../domain/entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @Inject('OrderRepository') private readonly orderRepository: OrderRepository
  ) {}

  getAllOrders(): Order[] {
    return this.orderRepository.findAll();
  }

  getOrderById(id: string): Order | null {
    return this.orderRepository.findById(id);
  }

  createOrder(order: Order): void {
    this.orderRepository.save(order);
  }

  deleteOrder(id: string): void {
    this.orderRepository.delete(id);
  }
}
