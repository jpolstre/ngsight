import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SalesDataService } from './../../services/sales-data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-section-sales',
  templateUrl: './section-sales.component.html',
  styleUrls: ['./section-sales.component.scss'],
})
export class SectionSalesComponent implements OnInit, OnDestroy {
  private $destroySubscribes = new Subject<any>();

  salesDataByState: any;
  salesDataByCustomer: any;
  salesDataByMonthly: any;

  constructor(private _salesDataService: SalesDataService) {}

  ngOnInit(): void {
    this._salesDataService
      .getOrdersByState()
      .pipe(takeUntil(this.$destroySubscribes))
      .subscribe((res) => {
        this.salesDataByState = res;
        // console.log('this.salesDataByState', this.salesDataByState);
      });
    this._salesDataService
      .getOrdersByCustomer(5)
      .pipe(takeUntil(this.$destroySubscribes))
      .subscribe((res) => {
        this.salesDataByCustomer = res;
        // console.log('this.salesDataByCustomer', this.salesDataByCustomer);
      });
  }

  ngOnDestroy(): void {
    this.$destroySubscribes.next({});
    this.$destroySubscribes.complete();
  }
}
