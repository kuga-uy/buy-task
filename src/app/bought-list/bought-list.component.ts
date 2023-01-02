import { Component, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-bought-list',
  templateUrl: './bought-list.component.html',
  styleUrls: ['./bought-list.component.css'],
})
export class BoughtListComponent {
  @Input() boughtList?: Product[];
  constructor() {}
}
