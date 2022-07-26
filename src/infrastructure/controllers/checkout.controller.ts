import { Body, Controller, Inject, ParseArrayPipe, Post } from '@nestjs/common';
import { UsecasesProxyModule } from '../usecases-proxy/usecases-proxy.module';
import { CheckoutUseCase } from '../../usecases/checkoutUseCase';

@Controller('checkout')
export class CheckoutController {
  constructor(
    @Inject(UsecasesProxyModule.CHECKOUT_USECASE_PROXY)
    private readonly checkoutUseCase: CheckoutUseCase,
  ) {}

  @Post()
  checkout(@Body(ParseArrayPipe) productIds: string[]) {
    return this.checkoutUseCase.execute(productIds);
  }
}
