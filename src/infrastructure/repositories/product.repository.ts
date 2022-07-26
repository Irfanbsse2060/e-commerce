import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { Product } from '../../domain/models/product';
import { ProductRepository } from '../../domain/repositories/productRepository.interface';
import { ProductModelDocument, ProductModel } from '../models/product.models';

@Injectable()
export class DatabaseProductRepository implements ProductRepository {
  constructor(
    @InjectModel(ProductModel.name)
    private productModel: Model<ProductModelDocument>,
  ) {}

  async findAllByProductIds(ids: string[]): Promise<Product[]> {
    const products = await this.productModel.find({ pid: ids }).exec();
    return this.toProduct(products);
  }

  private toProduct(products: ProductModel[]): Product[] {
    return products.map(
      (product) =>
        new Product(
          product.pid,
          product.name,
          product.unitPrice,
          product.discount,
        ),
    );
  }
}
