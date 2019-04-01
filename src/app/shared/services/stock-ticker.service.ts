import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Stock } from '../model/stocks';

@Injectable({
  providedIn: 'root'
})
export class StockTickerService {

  constructor(private http: HttpClient) { }

  /* Alpha vantage gives free api key to get full access  */
  symbolSearch(tickerSymbol): Observable<any> {
    return this.http.get<any>('https://www.alphavantage.co/query?function=SYMBOL_SEARCH&apikey=5G67QCPB1F8CRENI&keywords='+tickerSymbol);
  }

  getTickersOneYearHistory(selectedTicker): Observable<Stock> {
    return this.http.get<any>('https://api.iextrading.com/1.0/stock/aapl/chart/1y')
      .pipe(
        map((response) => response.map(stockObject => {
          return {
            date: new Date(stockObject.date),
            priceChange: stockObject.change
          } as Stock;
        }))
      );
  }
}
