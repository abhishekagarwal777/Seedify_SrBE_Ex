import { OrderRepository } from '../../domain/repository/order.repository';
import { Order } from '../../domain/entities/order.entity';
export declare class InMemoryOrderRepository implements OrderRepository {
    private orders;
    findAll(): Order[];
    findById(id: string): Order | null;
    save(order: Order): void;
    delete(id: string): void;
}
