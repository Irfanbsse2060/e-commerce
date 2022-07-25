import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

class Discount {
  @Prop()
  price: number;

  @Prop()
  quantity: number;
}

@Schema()
export class Product {
  @Prop({ required: true })
  pid: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  unitPrice: number;

  @Prop()
  discount: Discount;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
