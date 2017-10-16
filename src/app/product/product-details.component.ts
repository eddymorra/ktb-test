import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {

    title: string;

    constructor(private _route: ActivatedRoute, private _router: Router) {

    }

    ngOnInit() {
        let id = this._route.snapshot.params['id'];
        this.title = `Détails du produit n°${id}`;
    }

    goBack() {
        this._router.navigate(['/products']);
    }

}