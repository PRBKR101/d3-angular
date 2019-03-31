import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import { StockVsTrendModule } from './modules/stock-vs-trend/stock-vs-trend.module';
import { StockTickerService } from './shared/services/stock-ticker.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    StockVsTrendModule,
    FlexLayoutModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [StockTickerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
