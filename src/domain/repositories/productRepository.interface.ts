import { Product } from '../model/product';

export interface ProductRepository {
  findAllByProductIds(ids: string[]): Promise<Product[]>;
}
