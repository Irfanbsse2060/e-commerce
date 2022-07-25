import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductModelDocument = ProductModel & Document;

class Discount {
  @Prop()
  price: number;

  @Prop()
  quantity: number;
}

@Schema({ collection: 'products' })
export class ProductModel {
  @Prop({ required: true })
  pid: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  unitPrice: number;

  @Prop()
  discount: Discount;
}

export const ProductModelSchema = SchemaFactory.createForClass(ProductModel);
