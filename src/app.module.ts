import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

import { UsecasesProxyModule } from "./infrastructure/usecases-proxy/usecases-proxy.module";
import { ControllersModule } from "./infrastructure/controllers/controllers.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    UsecasesProxyModule.register(),
    ControllersModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {
}
