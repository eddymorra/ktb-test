import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';

@NgModule({
    imports: [CommonModule],
    declarations: [ProductComponent],
    exports: [ProductComponent],
    providers: [ProductService]
})
export class ProductModule {

}