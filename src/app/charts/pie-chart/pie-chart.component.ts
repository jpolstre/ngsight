import { Component, OnInit } from '@angular/core';


const SAMPLE_PIECHART_DATA: any[] = [
  { data: [350, 450, 120] },
];


const SAMPLE_PIECHART_LABELS: string[] = ['xyz Logistic', 'Main St Bakery', 'Acme Hosting'];
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  constructor() { }
  public pieChartData: any[] = SAMPLE_PIECHART_DATA;
  public pieChartLabels: string[] = SAMPLE_PIECHART_LABELS;
  public pieChartType = 'doughnut';
  public pieChartLegend = true;
  public colors = [
    {
      backgroundColor: ['#26547c', '#ff6b6b', '#ffd166'],
      borderColor: '#111'
    }
  ]

  public pieChartOptions: any = {
    scaleShadowVerticalLines: false,
    responsive: true,


  }

  ngOnInit(): void {
  }

}
