import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { Product as DomainProduct } from '../../domain/model/product';
import { ProductRepository } from '../../domain/repositories/productRepository.interface';
import { ProductDocument, Product } from '../models/product.models';

@Injectable()
export class DatabaseProductRepository implements ProductRepository {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async findAllByProductIds(ids: string[]): Promise<DomainProduct[]> {
    const products = await this.productModel.find({ pid: ids }).exec();
    return this.toProduct(products);
  }

  private toProduct(products: Product[]): DomainProduct[] {
    return products.map(
      (product) =>
        new DomainProduct(
          product.pid,
          product.name,
          product.unitPrice,
          product.discount,
        ),
    );
  }
}
