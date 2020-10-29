import { Order } from './../../shared/order';
import { SalesDataService } from './../../services/sales-data.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

// const SAMPLE_BARCHART_DATA: any[] = [
//   { data: [65, 59, 80, 81, 56, 54, 30], label: 'Q3 Sales' },
//   { data: [25, 39, 60, 91, 36, 54, 50], label: 'Q4 Sales' },
// ];

// const SAMPLE_BARCHART_LABELS: string[] = ['w1', 'w2', 'w3', 'w4', 'w5', 'w6', 'w7'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  // =SAMPLE_BARCHART_DATA;
  public barChartData: any[] = [];

  //= SAMPLE_BARCHART_LABELS
  public barChartLabels: string[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShadowVerticalLines: false,
    responsive: true
  }

  orders: Order[];
  orderLabels: string[];
  orderData: number[];


  constructor(private _salesDataService: SalesDataService) { }


  ngOnInit(): void {
    this._salesDataService.getOrders(1, 100)
      .subscribe(res => {
        const localCharData = this.getChardData(res);
        this.barChartLabels = localCharData.map(x => x[0]).reverse();
        this.barChartData = [{ data: localCharData.map(x => x[1]), label: 'Sales' }];
      });
  }

  getChardData(res: Object) {
    this.orders = res['page']['data'] as Order[];
    // const { data, labels } = this.orders.reduce((result, order) => {
    //   result.data.push(order.total);
    //   result.labels.push(moment(new Date(order.placed)).format('YY-MM-DD'));
    //   return result;
    // }, { data: [], labels: [] });


    const formattedOrders = this.orders.reduce((result, order) => {
      result.push([moment(order.placed).format('YY-MM-DD'), order.total])
      return result;
    }, []);

    const p = {}//[] es lo mismo.

    const chartData = formattedOrders.reduce((result, formatOrder) => {
      const key = formatOrder[0];
      if (!p[key]) {
        p[key] = formatOrder;
        result.push(p[key]);
      } else {
        p[key][1] += formatOrder[1];
      }
      return result;

    }, []);

    return chartData;


  }

}
