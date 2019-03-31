import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {switchMap, debounceTime, tap, finalize} from 'rxjs/operators';
import { StockTickerService } from 'src/app/shared/services/stock-ticker.service';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.sass']
})
export class StockSearchComponent implements OnInit {

  stockSearchForm: FormGroup;
  tickerOptions: string[] = [];
  isLoading = false;

  constructor(private fb: FormBuilder, private stockTickerService: StockTickerService) { }

  ngOnInit() {
    this.stockSearchForm = this.fb.group({
      tickerInput: ''
    });

    this.stockSearchForm.get('tickerInput').valueChanges.pipe(
      debounceTime(300),
      tap(() => this.isLoading = true),
      switchMap(value => this.stockTickerService.search({ticker: value}, 1)
        .pipe(
          finalize(() => this.isLoading = false),
          )
        )
    )
    .subscribe(response => this.tickerOptions = response.bestMatches);
  }

}
