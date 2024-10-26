import { OrderService } from '../../application/services/order.service';
import { CreateOrderDto } from '../../application/dto/create-order.dto';
import { Order } from '../../domain/entities/order.entity';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getAllOrders(): Order[];
    getOrderById(id: string): Order | null;
    createOrder(createOrderDto: CreateOrderDto): void;
    deleteOrder(id: string): void;
}
