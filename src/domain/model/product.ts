export class Product {
  pid: string;
  name: string;
  unitPrice: number;
  discount?: {
    price: number;
    quantity: number;
  };
}
