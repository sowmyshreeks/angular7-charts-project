import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-summary',
  templateUrl: './stock-summary.component.html',
  styleUrls: ['./stock-summary.component.css']
})
export class StockSummaryComponent implements OnInit {

  stock: any;

  constructor( 
              private StockService : StockService 
  ) { }

  ngOnInit() {
    this.stock = this.StockService.getData();
    console.log(this.stock);
  }

}
