import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockTickerService {

  constructor(private http: HttpClient) {}

  /* Alpha vantage gives free api key to get full access  */
  search(filter: {ticker: string} = {ticker: ''}, page = 1): Observable<any> {
    return this.http.get<any>('https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=demo');
  }
}
