import { ProductRepository } from '../domain/repositories/productRepository.interface';
import { Product } from '../domain/model/product';

export class CheckoutUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  calculateDiscountPrice(product: Product, orderedQuantity: number): number {
    const discountPrice =
      Math.floor(orderedQuantity / product.discount.quantity) *
      product.discount.price;
    const normalPrice =
      (orderedQuantity % product.discount.quantity) * product.unitPrice;
    return discountPrice + normalPrice;
  }

  getProductIdsFrequency = (productIds: string[]): Record<string, number> => {
    const productsWithCheckoutQuantity = {};
    productIds.forEach((product) => {
      productsWithCheckoutQuantity[product] = productsWithCheckoutQuantity[
        product
      ]
        ? productsWithCheckoutQuantity[product] + 1
        : 1;
    });
    return productsWithCheckoutQuantity;
  };

  calculatePrice = (
    products: Product[],
    productIdsWithFrequency: Record<string, number>,
  ): number => {
    return products.reduce((price, product) => {
      const productFrequency = productIdsWithFrequency[product.pid];
      // product with discount
      if (product.discount)
        return price + this.calculateDiscountPrice(product, productFrequency);
      // product without discount
      return price + productFrequency * product.unitPrice;
    }, 0);
  };

  async execute(productIds: string[]): Promise<{ price: number }> {
    const productIdsWithFrequency = this.getProductIdsFrequency(productIds);
    const products = await this.productRepository.findAllByProductIds(
      productIds,
    );
    const price = this.calculatePrice(products, productIdsWithFrequency);
    return { price };
  }
}
