// src/order/infrastructure/controllers/order.controller.ts
import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { OrderService } from '../../application/services/order.service';
import { CreateOrderDto } from '../../application/dto/create-order.dto';
import { Order } from '../../domain/entities/order.entity';
import { v4 as uuid } from 'uuid';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getAllOrders(): Order[] {
    return this.orderService.getAllOrders();
  }

  @Get(':id')
  getOrderById(@Param('id') id: string): Order | null {
    return this.orderService.getOrderById(id);
  }

  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto): void {
    const order = new Order(uuid(), createOrderDto.userId, createOrderDto.product, createOrderDto.quantity, createOrderDto.price);
    this.orderService.createOrder(order);
  }

  @Delete(':id')
  deleteOrder(@Param('id') id: string): void {
    this.orderService.deleteOrder(id);
  }
}
