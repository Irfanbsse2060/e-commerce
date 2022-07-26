import { ProductRepository } from '../domain/repositories/productRepository.interface';
import { Product } from '../domain/models/product';

export class CheckoutUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  // calculate the discount price of a product
  calculatePriceOfDiscountProduct(
    product: Product,
    productFrequency: number,
  ): number {
    const discountPrice =
      Math.floor(productFrequency / product.discount.quantity) *
      product.discount.price;
    const normalPrice =
      (productFrequency % product.discount.quantity) * product.unitPrice;
    return discountPrice + normalPrice;
  }

  // return map which contains product ids with number of occurrences
  getProductIdsFrequency = (productIds: string[]): Record<string, number> => {
    return productIds.reduce((productIdsWithFrequencyMap, productId) => {
      const productIdFrequency = productIdsWithFrequencyMap[productId]
        ? productIdsWithFrequencyMap[productId] + 1
        : 1;
      return {
        ...productIdsWithFrequencyMap,
        [productId]: productIdFrequency,
      };
    }, {});
  };

  // calculate the price to checkout
  calculatePrice = (
    products: Product[],
    productIdsWithFrequency: Record<string, number>,
  ): number => {
    return products.reduce((price, product) => {
      const productFrequency = productIdsWithFrequency[product.pid];
      // product with discount
      if (product.discount)
        return (
          price +
          this.calculatePriceOfDiscountProduct(product, productFrequency)
        );
      // product without discount
      return price + productFrequency * product.unitPrice;
    }, 0);
  };

  // main func to checkout
  async execute(productIds: string[]): Promise<{ price: number }> {
    const productIdsWithFrequency = this.getProductIdsFrequency(productIds);
    const products = await this.productRepository.findAllByProductIds(
      productIds,
    );
    const price = this.calculatePrice(products, productIdsWithFrequency);
    return { price };
  }
}
