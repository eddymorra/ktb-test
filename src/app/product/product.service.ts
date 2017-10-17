import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Product } from './product';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

    constructor(private _http:Http) {
        
    }

    getProductsFromAPI() {
        return this._http.get('https://test-recrutement.loyaltyexpert.net/products')
            .map(products => products.json())
    }

    getProductById(productId: number) {
        return this._http.get('https://test-recrutement.loyaltyexpert.net/products/' + productId)
        .map(products => products.json())
    }

    getBrandsFromAPI() {
        return this._http.get('https://test-recrutement.loyaltyexpert.net/brands')
            .map(brands => brands.json())
    }

    getCategoriesFromAPI() {
        return this._http.get('https://test-recrutement.loyaltyexpert.net/categories')
            .map(categories => categories.json())
    }

}