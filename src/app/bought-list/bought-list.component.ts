import { Component, Input } from '@angular/core';
import { IProduct } from '../interfaces';

@Component({
  selector: 'app-bought-list',
  templateUrl: './bought-list.component.html',
  styleUrls: ['./bought-list.component.css'],
})
export class BoughtListComponent {
  @Input() boughtList?: IProduct[];
  constructor() {}
}
