import { Order } from './../../shared/order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.scss']
})
export class SectionOrdersComponent implements OnInit {
  orders: Order[] = [
    { id: 1, customer: { id: 1, name: 'Main St Bakery', state: 'CO', email: 'email@example.com' }, fulfilled: new Date(2017, 12, 1), placed: new Date(2017, 12, 2), total: 230, status: 'Completed' },
    { id: 2, customer: { id: 1, name: 'Main St Bakery', state: 'CO', email: 'email@example.com' }, fulfilled: new Date(2017, 12, 1), placed: new Date(2017, 12, 2), total: 230, status: 'Completed' },
    { id: 3, customer: { id: 1, name: 'Main St Bakery', state: 'CO', email: 'email@example.com' }, fulfilled: new Date(2017, 12, 1), placed: new Date(2017, 12, 2), total: 230, status: 'Completed' },
    { id: 4, customer: { id: 1, name: 'Main St Bakery', state: 'CO', email: 'email@example.com' }, fulfilled: new Date(2017, 12, 1), placed: new Date(2017, 12, 2), total: 230, status: 'Completed' },
    { id: 5, customer: { id: 1, name: 'Main St Bakery', state: 'CO', email: 'email@example.com' }, fulfilled: new Date(2017, 12, 1), placed: new Date(2017, 12, 2), total: 230, status: 'Completed' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
