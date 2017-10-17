import { Component, OnInit } from '@angular/core';
import { Brand } from './brand';
import { Categories } from './categories';
import { NgForm } from '@angular/forms';
import { AddProductService } from './add-product.service';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'add-product.component.html',
})
export class AddProductComponent implements OnInit {
    
    brands: Brand[];
    categories: Categories[];

    constructor(private _productService: ProductService, private _addProductService: AddProductService) {}

    ngOnInit() {
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

    sendProduct(form: NgForm) {
        this._addProductService.postAddProductForm(form.value);
    }

}