import { Module } from '@nestjs/common';
import { DatabaseProductRepository } from './product.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModel, ProductModelSchema } from '../models/product.models';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductModel.name, schema: ProductModelSchema },
    ]),
  ],
  providers: [DatabaseProductRepository],
  exports: [DatabaseProductRepository],
})
export class RepositoriesModule {}
