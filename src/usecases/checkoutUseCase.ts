import { ProductRepository } from '../domain/repositories/productRepository.interface';


const calculateDiscountPrice = (product, orderedQuantity) => {
  const discountPrice = Math.floor(orderedQuantity / product.discount.quantity) * product.discount.price;
  const normalPrice = (orderedQuantity % product.discount.quantity) * product.unitPrice;
  return discountPrice + normalPrice;
};

export class CheckoutUseCase {
  constructor( private readonly productRepository: ProductRepository) {}

  async execute(products: string[]): Promise<{ price: number }> {
    let price = 0;
    let productsWithCheckoutQuantity = {};

    const productsFromDb = await this.productRepository.findAllByProductIds(products);

    products.forEach(product => {
      productsWithCheckoutQuantity[product] = productsWithCheckoutQuantity[product] ? productsWithCheckoutQuantity[product] + 1 : 1;
    });

    productsFromDb.forEach(product => {
      const orderedQuantity = productsWithCheckoutQuantity[product.pid];
      if (!orderedQuantity)
        return;
      if (!product.discount) {
        price += orderedQuantity * product.unitPrice;
        return;
      }

      price += calculateDiscountPrice(product, orderedQuantity);
    });

    return { price };
  }
}