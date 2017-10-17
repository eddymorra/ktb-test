import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class AddProductService {

    constructor(private _http:Http, private router: Router) {}

    postAddProductForm(addProductFormValue: any) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        const body = {
            "name": addProductFormValue.name,
            "description": addProductFormValue.description,
            "url": addProductFormValue.image,
            "categories": {"id": addProductFormValue.categories},
            "brand": addProductFormValue.brand
        }
        this._http.post(
            'https://test-recrutement.loyaltyexpert.net/products', 
            JSON.stringify(body), options
        ).subscribe(
            function (xhr) {console.log(xhr);},
            function (err) {}
        );
        return this.router.navigate(['/products']);
    }

}