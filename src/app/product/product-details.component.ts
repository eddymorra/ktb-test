import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'product-details.component.html',
    styleUrls: ['product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    products: Product[];

    constructor(private _route: ActivatedRoute, private _router: Router, private _productService: ProductService) {}

    ngOnInit() {
        this._productService.getProductById(this._route.snapshot.params['id'])
        .subscribe(
          res => this.products = res,
          err => console.log("Erreur : " + err.status)
        );
    }

    goBack() {
        this._router.navigate(['/products']);
    }

    goEdit(productId: number) {
        this._router.navigate(['/edit/' + productId]);
    }

}