import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {

    title: string;
    products: Product[];

    constructor(private _route: ActivatedRoute, private _router: Router, private _productService: ProductService) {

    }

    ngOnInit() {
        /*let id = this._route.snapshot.params['id'];
        this.title = `Détails du produit n°${id}`;*/
        this._productService.getProductById(this._route.snapshot.params['id'])
        .subscribe(
          res => this.products = res,
          err => console.log("Erreur : " + err.status)
        );
      console.log("Products : " + this.products);
    }

    goBack() {
        this._router.navigate(['/products']);
    }

}