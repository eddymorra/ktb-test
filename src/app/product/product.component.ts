import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { Brand } from './brand';
import { Categories } from './categories';
import { ProductService } from './product.service';

@Component({
  moduleId: module.id,
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  brands: Brand[];
  categories: Categories[];

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProductsFromAPI()
      .subscribe(
        res => this.products = res,
        err => console.log("Erreur : " + err.status)
      );

    this._productService.getBrandsFromAPI()
      .subscribe(
          res => this.brands = res,
          err => console.log(err.status)
      );

    this._productService.getCategoriesFromAPI()
    .subscribe(
        res => this.categories = res,
        err => console.log(err.status)
    );
  }

}
