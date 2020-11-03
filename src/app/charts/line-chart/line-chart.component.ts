import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Customer } from './../../shared/models/customer';
import { Order } from './../../shared/models/order';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SalesDataService } from 'src/app/services/sales-data.service';
import { FormatOrders, RespGetCharData } from 'src/app/shared/types';

import * as moment from 'moment';
import { LINE_CHART_COLORS } from 'src/app/shared/constants';

// const LINE_CHART_DATA = [
//   { data: [32, 14, 46, 23, 38, 56], label: 'Entiment Analysis' },
//   { data: [12, 18, 26, 13, 28, 26], label: 'Image Recognition' },
//   { data: [52, 34, 49, 53, 68, 62], label: 'Forecasting' },
// ]
// const LINE_CHART_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit, OnDestroy {
  private $destroy = new Subject<any>();

  topCustomers: string[];
  allOrders: Order[];

  //= LINE_CHART_DATA
  lineChartData: any[] = [];
  // = LINE_CHART_LABELS
  lineChartLabels: any[];

  lineChartColors = LINE_CHART_COLORS;

  lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  lineChartLegend = true;
  lineChartType = 'line';

  constructor(private _salesDataService: SalesDataService) {}

  ngOnInit(): void {
    this._salesDataService
      .getOrders(1, 150)
      .pipe(takeUntil(this.$destroy))
      .subscribe((res) => {
        this.allOrders = res['page']['data'] as Order[];

        this._salesDataService
          .getOrdersByCustomer(3)
          .pipe(takeUntil(this.$destroy))
          .subscribe((customers: Customer[]) => {
            this.topCustomers = customers.map((customer) => customer.name);
            // console.log(this.topCustomers);
            //allChartData es un array de que contiene formatOrders[], osea: allChartData= [[["2020-10-21T15:53:28.803047", 4947],["2020-10-21T11:17:28.606035", 2302],..], ..]
            const allChartData = this.topCustomers.reduce(
              (result: RespGetCharData[], nameCustomer: string) => {
                result.push(this.getChartData(this.allOrders, nameCustomer));
                return result;
              },
              []
            );

            const allDates = allChartData.reduce(
              (resp: string[], cd: RespGetCharData) => {
                const dates = cd.data.map((d) => this.toFrendlyDate(d[0]));
                return resp.concat(dates);
              },
              []
            );
            //hacer un array con valores que sean únicos.
            const uniqueDates = Array.from(new Set(allDates)).sort();
            // this.lineChartData = allChartData
            // console.log(uniqueDates);

            // const result = {};
            // const dataSets = (result['data'] = []);

            const lineChartData = [];

            this.topCustomers.forEach((nameCustomer, indexCustomer) => {
              // const customerOrders: CustomerOrder[] = [];
              const totals: number[] = [];

              uniqueDates.forEach((uniqueDate) => {
                // const customerOrder: CustomerOrder = {
                //   date: uniqueDate,
                //   total: this.getCustomerDateTotal(uniqueDate, nameCustomer),
                // };
                // customerOrders.push(customerOrder);
                const total = this.getCustomerDateTotal(
                  uniqueDate,
                  nameCustomer
                );
                totals.push(total);
              });

              lineChartData.push({ data: totals, label: nameCustomer });

              // dataSets[indexCustomer] = {
              //   customer: nameCustomer,
              //   orders: customerOrders,
              // };
            });

            this.lineChartLabels = uniqueDates;
            this.lineChartData = lineChartData;

            console.log(this.lineChartData);
          });
      });
  }

  toFrendlyDate(date: Date) {
    return moment(date).endOf('day').format('YY-MM-DD');
  }

  getCustomerDateTotal(uniqueDate: string, nameCustomer: string): number {
    return this.allOrders.reduce((result: number, order) => {
      if (
        order.customer.name === nameCustomer &&
        uniqueDate === this.toFrendlyDate(order.placed)
      ) {
        result = result + order.total;
      }
      return result;
    }, 0);
  }

  getChartData(allOrders: Order[], nameCustomer: string): RespGetCharData {
    const customerOrders = allOrders.filter(
      (o) => o.customer.name === nameCustomer
    );

    //result es un array que contiene otros arrays de tipo:  [Date, number]
    const formattedOrders = customerOrders.reduce(
      (result: FormatOrders[], order: Order) => {
        result.push([order.placed, order.total]);
        return result;
      },
      []
    );

    // console.log('formattedorders:', formattedOrders);
    return { customer: nameCustomer, data: formattedOrders };
  }

  ngOnDestroy(): void {
    this.$destroy.next({});
    this.$destroy.complete();
  }
}
