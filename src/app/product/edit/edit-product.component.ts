import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from '../brand';
import { Categories } from '../categories';
import { Product } from '../product';
import { NgForm } from '@angular/forms';
import { EditProductService } from './edit-product.service';
import { ProductService } from '../product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'edit-product.component.html',
})
export class EditProductComponent implements OnInit {
    
    brands: Brand[];
    categories: Categories[];
    products: Product[];

    constructor(
        private _productService: ProductService, 
        private _editProductService: EditProductService,
        private _router: Router,
        private _route: ActivatedRoute
    ) {}

    goProduct(productId: number) {
        this._router.navigate(['/products/' + productId]);
    }

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
        this._productService.getProductById(this._route.snapshot.params['id'])
        .subscribe(
          res => this.products = res,
          err => console.log("Erreur : " + err.status)
        );
      }

    sendProduct(form: NgForm, productId: number) {
        this._editProductService.putEditProductForm(form.value, productId);
    }

}