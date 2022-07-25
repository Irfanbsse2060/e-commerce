export class Product {
  pid: string;
  name: string;
  unitPrice: number;
  discount?: {
    price: number;
    quantity: number;
  };

  constructor(
    pid: string,
    name: string,
    unitPrice: number,
    discount?: { price: number; quantity: number },
  ) {
    this.pid = pid;
    this.name = name;
    this.unitPrice = unitPrice;
    if (discount) {
      this.discount = discount;
    }
  }
}
