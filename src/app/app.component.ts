import { Component, OnInit } from '@angular/core';

import { ProductListService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ProductListService ]
})
export class AppComponent implements OnInit{
  public products: any;

  constructor(private productListService: ProductListService){}
  
  ngOnInit(){
    this.productListService.checkDate();
    this.products = this.productListService.getProducts();
  }
}