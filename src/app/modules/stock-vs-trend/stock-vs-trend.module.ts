import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockVsTrendComponent } from './stock-vs-trend.component';
import { StockSearchComponent } from './components/stock-search/stock-search.component';
import { LinearPlotGraphComponent } from './components/linear-plot-graph/linear-plot-graph.component';

@NgModule({
  declarations: [StockVsTrendComponent, StockSearchComponent, LinearPlotGraphComponent],
  imports: [
    CommonModule
  ]
})
export class StockVsTrendModule { }
