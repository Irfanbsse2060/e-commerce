import { Product } from '../domain/model/product';

export default [
  {
    pid: '001',
    name: 'Rolex',
    unitPrice: 100,
    discount: {
      quantity: 3,
      price: 200,
    },
  },
  {
    pid: '002',
    name: 'Michael Kors',
    unitPrice: 80,
    discount: {
      quantity: 2,
      price: 120,
    },
  },
  {
    pid: '003',
    name: 'Swatch',
    unitPrice: 50,
  },
  {
    pid: '004',
    name: 'Casio',
    unitPrice: 30,
  },
];

export const aProduct = (pid = '001', product: Partial<Product>): Product => {
  return {
    pid,
    name: 'Rolex',
    unitPrice: 100,
    ...product,
  };
};
