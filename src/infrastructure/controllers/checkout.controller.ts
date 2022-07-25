import { Body, Controller, Inject, ParseArrayPipe, Post } from '@nestjs/common';
import { UsecasesProxyModule } from '../usecases-proxy/usecases-proxy.module';
import { UseCaseProxy } from '../usecases-proxy/usecases-proxy';
import { CheckoutUseCase } from '../../usecases/checkoutUseCase';

@Controller('checkout')
export class CheckoutController {
  constructor(
    @Inject(UsecasesProxyModule.CHECKOUT_USECASE_PROXY)
    private readonly checkoutUseCaseUseCaseProxy: UseCaseProxy<CheckoutUseCase>,
  ) {}

  @Post()
  checkout(@Body(ParseArrayPipe) products: string[]) {
    return this.checkoutUseCaseUseCaseProxy.getInstance().execute(products);
  }
}
