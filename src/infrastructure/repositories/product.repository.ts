import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { Product as DomainProduct } from '../../domain/model/product';
import { ProductRepository } from '../../domain/repositories/productRepository.interface';
import { ProductDocument, Product } from '../entities/product.entity';

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
    return products.map((product) => {
      const domainProduct: DomainProduct = new DomainProduct();
      domainProduct.pid = product.pid;
      domainProduct.name = product.name;
      domainProduct.unitPrice = product.unitPrice;
      if (product.discount) {
        domainProduct.discount = {
          price: product.discount.price,
          quantity: product.discount.quantity,
        };
      }
      return domainProduct;
    });
  }
}
