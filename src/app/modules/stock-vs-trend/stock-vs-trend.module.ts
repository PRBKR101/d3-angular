import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockVsTrendComponent } from './stock-vs-trend.component';
import { StockSearchComponent } from './components/stock-search/stock-search.component';
import { LinearPlotGraphComponent } from './components/linear-plot-graph/linear-plot-graph.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule, MatAutocompleteModule,  MatFormFieldModule, MatInputModule } from '@angular/material/';
import { StockTickerService } from 'src/app/shared/services/stock-ticker.service';

@NgModule({
  declarations: [StockVsTrendComponent, StockSearchComponent, LinearPlotGraphComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule
  ],
  providers: [
    StockTickerService
  ]
})
export class StockVsTrendModule { }
