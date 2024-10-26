// src/order/infrastructure/repositories/in-memory-order.repository.ts
import { OrderRepository } from '../../domain/repository/order.repository';
import { Order } from '../../domain/entities/order.entity';

export class InMemoryOrderRepository implements OrderRepository {
  private orders: Order[] = [];

  findAll(): Order[] {
    return this.orders;
  }

  findById(id: string): Order | null {
    return this.orders.find(order => order.id === id) || null;
  }

  save(order: Order): void {
    this.orders.push(order);
  }

  delete(id: string): void {
    this.orders = this.orders.filter(order => order.id !== id);
  }
}
