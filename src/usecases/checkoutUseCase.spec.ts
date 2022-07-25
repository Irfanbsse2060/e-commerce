import { ProductRepository } from "../domain/repositories/productRepository.interface";
import { CheckoutUseCase } from "./checkoutUseCase";
import products from "../mocks/products";

describe("CheckoutUseCase", () => {
  let productRepository: ProductRepository;
  let checkoutUseCase: CheckoutUseCase;

  beforeEach(async () => {
    productRepository = {} as ProductRepository;
    productRepository.findAllByProductIds = jest.fn().mockResolvedValue(products);
    checkoutUseCase = new CheckoutUseCase(productRepository);
  });

  it("should checkout with correct price", async () => {
    const checkoutProducts = ["001", "002"];
    const expectedPrice = 180;
    expect(await checkoutUseCase.execute(checkoutProducts)).toEqual({ price: expectedPrice });
  });

});
