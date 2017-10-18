import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class EditProductService {

    constructor(private _http:Http, private router: Router) {}

    putEditProductForm(editProductFormValue: any, productId: number) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        const body = {
            "name": editProductFormValue.name,
            "description": editProductFormValue.description,
            "url": editProductFormValue.image,
            "categories": {"id": editProductFormValue.categories},
            "brand": editProductFormValue.brand
        }
        this._http.put(
            'https://test-recrutement.loyaltyexpert.net/products/' + productId, 
            JSON.stringify(body), options
        ).subscribe(
            function (xhr) {console.log(xhr);},
            function (err) {}
        );
        return this.router.navigate(['/products/' + productId]);
    }

}