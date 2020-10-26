import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.colors'

const LINE_CHART_DATA = [
  { data: [32, 14, 46, 23, 38, 56], label: 'Entiment Analysis' },
  { data: [12, 18, 26, 13, 28, 26], label: 'Image Recognition' },
  { data: [52, 34, 49, 53, 68, 62], label: 'Forecasting' },
]
const LINE_CHART_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];




@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  constructor() { }
  lineChartData = LINE_CHART_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartColors = LINE_CHART_COLORS;
  lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,

  }
  lineChartLegend = true;
  lineChartType = 'line';


  ngOnInit(): void {
  }

}
