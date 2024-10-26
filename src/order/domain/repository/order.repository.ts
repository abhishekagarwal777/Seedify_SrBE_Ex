import { Order } from '../entities/order.entity';

export interface OrderRepository {
  findAll(): Order[];
  findById(id: string): Order | null;
  save(order: Order): void;
  delete(id: string): void;
}




// import { Order } from './order';

// export interface OrderRepository {
//   save(order: Order): Promise<void>;
//   findById(id: string): Promise<Order>;
// }


