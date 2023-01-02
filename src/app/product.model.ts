export class Product {
  description: string;
  price: number;
  quantity: number;
  constructor(
    description: string = '',
    price: number = 0,
    quantity: number = 0
  ) {
    this.description = description;
    this.price = price;
    this.quantity = quantity;
  }
}
