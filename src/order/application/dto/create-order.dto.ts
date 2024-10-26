// src/order/application/dto/create-order.dto.ts
import { IsString, IsNumber } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  userId: string;

  @IsString()
  product: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;
}