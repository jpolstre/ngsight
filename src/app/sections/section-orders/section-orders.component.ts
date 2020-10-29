import { SalesDataService } from '../../services/sales-data.service';
import { Order } from './../../shared/order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.scss']
})
export class SectionOrdersComponent implements OnInit {
  orders: Order[] = [
    // { id: 1, customer: { id: 1, name: 'Main St Bakery', state: 'CO', email: 'email@example.com' }, fulfilled: new Date(2017, 12, 1), placed: new Date(2017, 12, 2), total: 230, status: 'Completed' },
    // { id: 2, customer: { id: 1, name: 'Main St Bakery', state: 'CO', email: 'email@example.com' }, fulfilled: new Date(2017, 12, 1), placed: new Date(2017, 12, 2), total: 230, status: 'Completed' },
    // { id: 3, customer: { id: 1, name: 'Main St Bakery', state: 'CO', email: 'email@example.com' }, fulfilled: new Date(2017, 12, 1), placed: new Date(2017, 12, 2), total: 230, status: 'Completed' },
    // { id: 4, customer: { id: 1, name: 'Main St Bakery', state: 'CO', email: 'email@example.com' }, fulfilled: new Date(2017, 12, 1), placed: new Date(2017, 12, 2), total: 230, status: 'Completed' },
    // { id: 5, customer: { id: 1, name: 'Main St Bakery', state: 'CO', email: 'email@example.com' }, fulfilled: new Date(2017, 12, 1), placed: new Date(2017, 12, 2), total: 230, status: 'Completed' },
  ];
  totalPages = 0;
  total = 0;
  page = 1;
  limit = 10;
  loading = false;

  constructor(private _salesDataScv: SalesDataService) { }

  ngOnInit(): void {
    this.getOrders();
  }
  getOrders(): void {
    this._salesDataScv.getOrders(this.page, this.limit).subscribe((res) => {
      console.log(res);
      this.orders = res['page']['data'];
      this.total = res['page']['total'];
      this.totalPages = res['totalPages'];
      this.loading = false;
    });
  }
  goToPrevious() {
    if (this.page > 1) {
      this.page--;
      this.getOrders();
    }
  }
  goToNext() {
    if (this.page < this.totalPages) {
      this.page++;
      this.getOrders();
    }
  }

  goToPage(n: any): void {
    this.page = n;
    this.getOrders();

  }

}
