import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  moduleId: module.id,
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProductsFromAPI()
      .subscribe(
        res => this.products = res,
        err => console.log("Erreur : " + err.status)
      );
    console.log("Products : " + this.products);
  }

}
