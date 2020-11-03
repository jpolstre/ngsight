import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SalesDataService } from '../../services/sales-data.service';
import { Order } from './../../shared/models/order';
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';

type OrderType = 'ASC' | 'DESC';

interface SubmitEvent extends Event {
  submitter: HTMLElement;
}
@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.scss'],
})
export class SectionOrdersComponent implements OnInit, OnDestroy {
  private $destroy = new Subject<any>();

  //usu de refs.
  @ViewChild('filterInputRef') filterInputRef: ElementRef<HTMLInputElement>;

  orders: Order[] = [];
  totalPages = 0;
  total = 0;
  page = 1;
  limit = 8;
  loading = false;
  filterTerm = '';
  orderField = 'Customer';
  directionSort: OrderType = 'ASC';

  constructor(private _salesDataScv: SalesDataService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this._salesDataScv
      .getOrders(
        this.page,
        this.limit,
        this.filterTerm,
        this.orderField,
        this.directionSort
      )
      .pipe(takeUntil(this.$destroy))
      .subscribe((res) => {
        // console.log(res);
        this.orders = res['page']['data'];
        this.total = res['page']['total'];
        this.totalPages = res['totalPages'];
        this.loading = false;
      });
  }

  goToPrevious(): void {
    if (this.page > 1) {
      this.page--;
      this.getOrders();
    }
  }

  goToNext(): void {
    if (this.page < this.totalPages) {
      this.page++;
      this.getOrders();
    }
  }

  goToPage(n: any): void {
    this.page = n;
    this.getOrders();
  }

  onFilter(event: SubmitEvent) {
    event.preventDefault();
    this.page = 1;
    this.getOrders();
  }

  // onInputFilter(event: any) {
  //   this.filterTerm = event.target.value;
  // }
  cleanFilter() {
    this.page = 1;
    this.filterTerm = '';
    this.getOrders();
    this.filterInputRef.nativeElement.focus();
  }
  sort(column: string) {
    if (this.orderField === column) {
      this.directionSort = this.directionSort === 'ASC' ? 'DESC' : 'ASC';
    } else {
      this.orderField = column;
      this.directionSort = 'ASC';
    }
    this.getOrders();
  }
  getClassSort(field: string) {
    return this.orderField === field ? [this.directionSort] : [''];
  }

  ngOnDestroy(): void {
    this.$destroy.next({});
    this.$destroy.complete();
  }
}
