import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  @Input() products?: IProduct[];
  @Output() productBought: EventEmitter<IProduct>;

  constructor() {
    this.productBought = new EventEmitter();
  }

  buy(product: IProduct) {
    this.productBought.emit(product);
  }
}
