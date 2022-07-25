import { Module } from '@nestjs/common';
import { UsecasesProxyModule } from '../usecases-proxy/usecases-proxy.module';
import { CheckoutController } from './checkout.controller';

@Module({
  imports: [UsecasesProxyModule.register()],
  controllers: [CheckoutController],
})
export class ControllersModule {}
