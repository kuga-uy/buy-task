import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../interfaces';

export const initialProductState = {
  description: '',
  price: 0,
  quantity: 0,
};
@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css'],
})
export class ProductsFormComponent {
  productsList: IProduct[];
  boughtList: IProduct[];
  product: IProduct;
  buy: any;

  constructor() {
    this.productsList = [];
    this.boughtList = [];
    this.buy = () => EventEmitter;
    this.product = initialProductState;
  }

  addToList(event: Event) {
    event.preventDefault();
    const currentProduct = { ...this.product };
    this.productsList.push(currentProduct);
    this.product = initialProductState;
  }

  bought(event: any) {
    const productBought = { ...event };
    this.boughtList.push(productBought);
    this.productsList = this.productsList.filter(
      (product) => JSON.stringify(product) !== JSON.stringify(productBought)
    );
    this.product = initialProductState;
  }
}
