import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProductComponent } from './product.component';
import { ProductService } from './product.service';
import { ProductDetailsComponent } from './product-details.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductSummaryComponent } from './product-summary.component';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule],
    declarations: [ProductComponent, ProductDetailsComponent, ProductFilterPipe, ProductSummaryComponent],
    exports: [ProductComponent],
    providers: [ProductService]
})
export class ProductModule {}