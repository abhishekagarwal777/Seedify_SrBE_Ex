import { Order } from '../entities/order.entity';
export interface OrderRepository {
    findAll(): Order[];
    findById(id: string): Order | null;
    save(order: Order): void;
    delete(id: string): void;
}
