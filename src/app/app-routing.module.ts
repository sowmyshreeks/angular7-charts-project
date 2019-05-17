import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewStockComponent } from './new-stock/new-stock.component';
import { StockSummaryComponent } from './stock-summary/stock-summary.component';

const routes: Routes = [
  { path: 'newstock', component: NewStockComponent },
  { path: 'stocksummary', component: StockSummaryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
