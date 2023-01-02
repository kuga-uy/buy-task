import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  @Input() products?: Product[];
  @Output() productBought: EventEmitter<Product>;

  constructor() {
    this.productBought = new EventEmitter();
  }

  buy(product: Product) {
    this.productBought.emit(product);
  }
}
