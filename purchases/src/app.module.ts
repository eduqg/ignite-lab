import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProductsResolver } from './http/graphql/resolvers/products.resolver';
import { HttpModule } from './http/http.module';
import { ProductsService } from './services/products.service';

@Module({
  imports: [DatabaseModule, HttpModule],
  controllers: [],
  providers: [ProductsResolver, ProductsService],
})
export class AppModule {}
