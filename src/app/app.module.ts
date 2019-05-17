import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewStockComponent } from './new-stock/new-stock.component';
import { StockSummaryComponent } from './stock-summary/stock-summary.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StockService } from './stock.service';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    NewStockComponent,
    StockSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ChartModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
