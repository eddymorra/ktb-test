import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product';

@Component({
    moduleId: module.id,
    selector: "product-summary",
    templateUrl: "product-summary.component.html"
})
export class ProductSummaryComponent {

    @Input() product: Product;

}