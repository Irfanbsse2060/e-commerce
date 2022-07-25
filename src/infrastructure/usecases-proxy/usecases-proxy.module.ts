import { DynamicModule, Module } from "@nestjs/common";
import { CheckoutUseCase } from "../../usecases/checkoutUseCase";
import { RepositoriesModule } from "../repositories/repositories.module";
import { DatabaseProductRepository } from "../repositories/product.repository";
import { UseCaseProxy } from "./usecases-proxy";

@Module({
  imports: [RepositoriesModule]
})
export class UsecasesProxyModule {
  static CHECKOUT_USECASE_PROXY = "CheckoutUseCaseProxy";
  static register(): DynamicModule {
    return {
      module: UsecasesProxyModule,
      providers: [
        {
          inject: [DatabaseProductRepository],
          provide: UsecasesProxyModule.CHECKOUT_USECASE_PROXY,
          useFactory: (productRepository: DatabaseProductRepository) =>
            new UseCaseProxy(new CheckoutUseCase(productRepository))
        }
      ],
      exports: [
        UsecasesProxyModule.CHECKOUT_USECASE_PROXY
      ]
    };
  }
}
