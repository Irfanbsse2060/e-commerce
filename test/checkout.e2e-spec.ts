import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import * as request from 'supertest';
import { Model } from 'mongoose';

import products from '../src/mocks/products';
import { ProductDocument } from '../src/infrastructure/entities/product.entity';
import { AppModule } from '../src/app.module';

describe('Checkout Controller (e2e)', () => {
  let app: INestApplication;
  let productModel: Model<ProductDocument>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    productModel = app.get(getModelToken('Product'));
    await productModel.insertMany(products);
  });

  afterAll(async () => {
    await productModel.deleteMany();
    app.close();
  });

  it('/checkout (Post) should checkout with correct price', async () => {
    const products = ['001', '002', '001', '004', '003'];
    const response = await request(app.getHttpServer())
      .post('/checkout')
      .send(products);
    expect(response.status).toEqual(201);
    expect(response.body.price).toEqual(360);
  });

  it('/checkout (Post) should return bad request error if products list is not being passed', async () => {
    const response = await request(app.getHttpServer()).post('/checkout');
    expect(response.status).toEqual(400);
    expect(response.body.message).toEqual(
      'Validation failed (parsable array expected)',
    );
  });
});
