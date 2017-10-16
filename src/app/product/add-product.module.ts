import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product.component';
import { AddProductService } from './add-product.service';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [AddProductComponent],
    exports: [AddProductComponent],
    providers: [AddProductService]
})
export class AddProductModule {

}