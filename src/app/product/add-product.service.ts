import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class AddProductService {

    constructor(private _http:Http) {
        
    }

    getBrandsFromAPI() {
        return this._http.get('https://test-recrutement.loyaltyexpert.net/brands')
            .map(brands => brands.json())
    }

    getCategoriesFromAPI() {
        return this._http.get('https://test-recrutement.loyaltyexpert.net/categories')
            .map(categories => categories.json())
    }

    postAddProductForm(addProductFormValue: any) {
        const body = {
            "name": addProductFormValue.name,
            "description": addProductFormValue.description,
            "url": addProductFormValue.image,
            "categories": [addProductFormValue.categories],
            "brand": addProductFormValue.brand
        }
        return this._http.post(
            'https://test-recrutement.loyaltyexpert.net/products', 
            JSON.stringify(body)
        )
    }

}