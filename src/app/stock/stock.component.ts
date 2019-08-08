import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { stockClass } from '../stock';




@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  private CurrentSearchValue : stockClass;
  private pastSearchValue : stockClass[] = []
  constructor(private stockservice:StockService) { }

  ngOnInit() {
  }

  getClick(SearchElement : string): void {
    this.CurrentSearchValue = this.stockservice.getClick(SearchElement);

    this.CurrentSearchValue.SearchTime = (new Date()).toTimeString();
    this.pastSearchValue.push(this.CurrentSearchValue);
  }
}
