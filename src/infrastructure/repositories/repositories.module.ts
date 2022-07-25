import { Module } from '@nestjs/common';
import { DatabaseProductRepository } from './product.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from '../models/product.models';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  providers: [DatabaseProductRepository],
  exports: [DatabaseProductRepository],
})
export class RepositoriesModule {}
