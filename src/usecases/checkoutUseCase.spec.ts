import { ProductRepository } from '../domain/repositories/productRepository.interface';
import { CheckoutUseCase } from './checkoutUseCase';
import products from '../mocks/products';

describe('CheckoutUseCase', () => {
  let productRepository: ProductRepository;
  let checkoutUseCase: CheckoutUseCase;

  beforeEach(async () => {
    productRepository = {} as ProductRepository;
    productRepository.findAllByProductIds = jest
      .fn()
      .mockResolvedValue(products);
    checkoutUseCase = new CheckoutUseCase(productRepository);
  });

  it('should checkout with correct price', async () => {
    const checkoutProductIds = ['001', '002'];
    const expectedPrice = 180;
    expect(await checkoutUseCase.execute(checkoutProductIds)).toEqual({
      price: expectedPrice,
    });
  });

  it("should checkout with 0 if no product is added into cart", async () => {
    const checkoutProductIds = [];
    const expectedPrice = 0;
    expect(await checkoutUseCase.execute(checkoutProductIds)).toEqual({ price: expectedPrice });
  });

  it("should checkout with discount price if there are discounted products in the cart", async () => {
    const checkoutProductIds = ["001", "001", "001", "002"];
    const expectedPrice = 280;
    expect(await checkoutUseCase.execute(checkoutProductIds)).toEqual({ price: expectedPrice });
  });

  it("should apply discount multiple times if applicable while checking out", async () => {
    const checkoutProductIds = ["001", "001", "001", "001", "001", "001", "001", "002"];
    const expectedPrice = 580;
    expect(await checkoutUseCase.execute(checkoutProductIds)).toEqual({ price: expectedPrice });
  });
});
