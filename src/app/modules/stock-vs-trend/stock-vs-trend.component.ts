import { Component, OnInit } from '@angular/core';
import { StockTickerService } from 'src/app/shared/services/stock-ticker.service';
import { GoogleTrendService } from 'src/app/shared/services/google-trend.service';

@Component({
  selector: 'app-stock-vs-trend',
  templateUrl: './stock-vs-trend.component.html',
  styleUrls: ['./stock-vs-trend.component.scss']
})
export class StockVsTrendComponent implements OnInit {
  tickerOneYearHistory$: any;
  googleTrend$: any;

  constructor(private stockTickerService: StockTickerService, private googleTrendService : GoogleTrendService) { }
  ngOnInit() {
  }

  onSearch(selectedTicker: any) {
    this.tickerOneYearHistory$ = this.stockTickerService.getTickersOneYearHistory(selectedTicker);
    this.googleTrend$ = this.googleTrendService.getKeyWordTrend(selectedTicker['1. symbol']);
  }
}
