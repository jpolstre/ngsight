import { THEME_COLORS } from './../../shared/constants';
import { Component, Input, OnInit } from '@angular/core';

const theme = 'Bright';

// const SAMPLE_PIECHART_DATA: any[] = [
//   { data: [350, 450, 120] },
// ];


// const SAMPLE_PIECHART_LABELS: string[] = ['xyz Logistic', 'Main St Bakery', 'Acme Hosting'];
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  @Input() inputData: any;

  @Input() page: number;

  @Input() limit: number = null;
  // = SAMPLE_PIECHART_DATA
  public pieChartData: any[] = [];

  // = SAMPLE_PIECHART_LABELS
  public pieChartLabels: string[];

  public pieChartType = 'doughnut';
  public pieChartLegend = true;
  public colors = [
    {
      backgroundColor: this.themeColors(theme),
      borderColor: '#111'
    }
  ]

  public pieChartOptions: any = {
    scaleShadowVerticalLines: false,
    responsive: true,


  }

  ngOnInit(): void {

    this.parseChartData(this.inputData, this.limit);

  }

  parseChartData(res: any, limit?: number): void {
    const allData = res.slice(0, limit);

    // this.pieChartData = [{ data: allData.map(x => x['total']) }]
    // this.pieChartLabels = allData.map(x => x['name'] || x['state'])

    this.pieChartLabels = allData.map(x => x[Object.keys(x)[0]])
    this.pieChartData = [{ data: allData.map(x => x[Object.keys(x)[1]]) }]

    // console.log(allData);
  }
  themeColors(setName: string): string[] {
    const c = THEME_COLORS.slice(0).find(set => set.name === setName).colorSet;

    return c;


  }

}
