import { Injectable } from '@angular/core';
import { stockClass } from './stock';
import { SEARCH } from ' ./stock-angularproject ';
@Injectable()
export class StockService {

  private stocks : stockClass[] = SEARCH; 
  constructor() { }

getClick(SearchElement:String): stockClass{
  for(var i = 0; i < this.stocks.length; i++)
  {
    if(this.stocks[i].SearchElement == SearchElement) 
    {
      return this.stocks[i];
    }
    }
  }
}
