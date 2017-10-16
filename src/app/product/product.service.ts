import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Product } from './product';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService {

    constructor(private _http:Http) {
        
    }

    getProductsFromAPI() {
        return this._http.get('https://test-recrutement.loyaltyexpert.net/products')
            .do(x => console.log("X : " + x))
            .map(products => products.json())
    }

}