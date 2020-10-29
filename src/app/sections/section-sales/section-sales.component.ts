import { SalesDataService } from './../../services/sales-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-sales',
  templateUrl: './section-sales.component.html',
  styleUrls: ['./section-sales.component.scss']
})
export class SectionSalesComponent implements OnInit {
  salesDataByState: any;
  salesDataByCustomer: any;

  constructor(private _salesDataService: SalesDataService) { }

  ngOnInit(): void {
    this._salesDataService.getOrdersByState().subscribe(res => {
      this.salesDataByState = res;
      // console.log('this.salesDataByState', this.salesDataByState);
    });
    this._salesDataService.getOrdersByCustomer(5).subscribe(res => {

      this.salesDataByCustomer = res;
      // console.log('this.salesDataByCustomer', this.salesDataByCustomer);
    });
  }


}
