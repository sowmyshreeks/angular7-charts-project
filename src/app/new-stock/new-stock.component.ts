import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { StockService } from '../stock.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-new-stock',
  templateUrl: './new-stock.component.html',
  styleUrls: ['./new-stock.component.css']
})
export class NewStockComponent implements OnInit {

 
  chart: Chart;
  showChart: any;
  symbol: any;
  value: any;
  stockvalue: any;
  date: any;

  constructor(private fb: FormBuilder,
              private StockService : StockService
    
    ) { }

  ngOnInit() {
  }

  
  public stockArray: Array<any> = [];
  public stock: any = {};
  // dataSource : any ; 
  
  addStock() {
      this.stockArray.push(this.stock);
      // this.stockChart(this.stockArray);
      // localStorage.setItem(this.dataSource, 'this.stockArray');
      // this.StockService.setData(this.stockArray)
      this.stock = {};
  }

  stockChart(array, symbol){
    let xArray: Array<any> = [];
    let yArray: Array<any> = [];

    array.sort(function(a,b){
      var c = new Date(a.date);
      var d = new Date(b.date);
      return <any> c- <any> d;
      });
    
    array.filter(function(el){
        return el.symbol == symbol &&
        xArray.push(parseFloat(el.value)) &&
        yArray.push(el.date);
    });
    console.log(xArray);
    console.log(yArray);
    
    
    let chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: symbol
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: yArray,
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Stock Value'
        }
      },
      series: [{
        name: symbol,
        // data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        data: xArray,
        type: undefined
      }]
    });
 
    this.chart = chart;
    
  }
}
