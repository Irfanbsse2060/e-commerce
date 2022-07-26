import { ProductRepository } from '../domain/repositories/productRepository.interface';
import { CheckoutUseCase } from './checkoutUseCase';
import { aProduct } from '../mocks/products';

describe('CheckoutUseCase', () => {
  let productRepository: ProductRepository;
  let checkoutUseCase: CheckoutUseCase;

  beforeEach(async () => {
    productRepository = {} as ProductRepository;
    checkoutUseCase = new CheckoutUseCase(productRepository);
  });

  it('should checkout with correct price', async () => {
    const rolexWatch = aProduct('001', { name: 'rolex', unitPrice: 100 });
    const casioWatch = aProduct('002', { name: 'casio', unitPrice: 80 });
    const checkoutProductIds = [rolexWatch.pid, casioWatch.pid];

    productRepository.findAllByProductIds = jest
      .fn()
      .mockResolvedValue([rolexWatch, casioWatch]);

    const expectedPrice = 180;
    expect(await checkoutUseCase.execute(checkoutProductIds)).toEqual({
      price: expectedPrice,
    });
  });

  it('should checkout with 0 if no product is added into cart', async () => {
    const checkoutProductIds = [];
    productRepository.findAllByProductIds = jest.fn().mockResolvedValue([]);

    const expectedPrice = 0;
    expect(await checkoutUseCase.execute(checkoutProductIds)).toEqual({
      price: expectedPrice,
    });
  });

  it('should checkout with discount price if there are discounted products in the cart', async () => {
    const rolexWatchWithDiscount = aProduct('001', {
      name: 'rolex',
      unitPrice: 100,
      discount: { quantity: 3, price: 200 },
    });
    const casioWatchWithDiscount = aProduct('002', {
      name: 'casio',
      unitPrice: 80,
      discount: { quantity: 2, price: 120 },
    });
    const rolexWatchPid = rolexWatchWithDiscount.pid;
    const casioWatchPid = casioWatchWithDiscount.pid;
    const checkoutProductIds = [
      rolexWatchPid,
      rolexWatchPid,
      rolexWatchPid,
      casioWatchPid,
    ];

    productRepository.findAllByProductIds = jest
      .fn()
      .mockResolvedValue([rolexWatchWithDiscount, casioWatchWithDiscount]);

    const expectedPrice = 280;
    expect(await checkoutUseCase.execute(checkoutProductIds)).toEqual({
      price: expectedPrice,
    });
  });

  it('should apply discount multiple times if applicable while checking out', async () => {
    const rolexWatchWithDiscount = aProduct('001', {
      name: 'rolex',
      unitPrice: 100,
      discount: { quantity: 3, price: 200 },
    });
    const casioWatch = aProduct('002', { name: 'casio', unitPrice: 80 });
    const rolexWatchPid = rolexWatchWithDiscount.pid;
    const casioWatchPid = casioWatch.pid;

    productRepository.findAllByProductIds = jest
      .fn()
      .mockResolvedValue([rolexWatchWithDiscount, casioWatch]);

    const checkoutProductIds = [
      rolexWatchPid,
      rolexWatchPid,
      rolexWatchPid,
      rolexWatchPid,
      rolexWatchPid,
      rolexWatchPid,
      rolexWatchPid,
      casioWatchPid,
    ];

    const expectedPrice = 580;
    expect(await checkoutUseCase.execute(checkoutProductIds)).toEqual({
      price: expectedPrice,
    });
  });
});
