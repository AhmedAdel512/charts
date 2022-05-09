import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ChartConfiguration, ChartData, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  @Input() title: string = 'Bar Chart';
  @Input() barChartData: ChartData<'bar'> = { labels: [], datasets: [] };
  @Input() barChartOptions: any
  @Input() enableRemove: boolean = false;
  @Input() enableMinimize: boolean = true;
  @Input() bgColor: string = 'bg-gradient-teal'
  @Output() public barChartSendData = new EventEmitter<Event>();

  public barChartPlugins = [];
  constructor() {}

  ngOnInit(): void {}

  public pieChartClick(ev: any) {
    if (ev.length > 0) {
      this.barChartSendData.emit(ev);
    }
  }
}
