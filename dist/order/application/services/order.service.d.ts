import { OrderRepository } from '../../domain/repository/order.repository';
import { Order } from '../../domain/entities/order.entity';
export declare class OrderService {
    private readonly orderRepository;
    constructor(orderRepository: OrderRepository);
    getAllOrders(): Order[];
    getOrderById(id: string): Order | null;
    createOrder(order: Order): void;
    deleteOrder(id: string): void;
}
