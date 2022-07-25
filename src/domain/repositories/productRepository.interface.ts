import { Product } from '../models/product';

export interface ProductRepository {
  findAllByProductIds(ids: string[]): Promise<Product[]>;
}
