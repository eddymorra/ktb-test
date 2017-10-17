import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product.component';
import { EditProductService } from './edit-product.service';
import { ProductService } from '../product.service';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [EditProductComponent],
    exports: [EditProductComponent],
    providers: [EditProductService, ProductService]
})
export class EditProductModule {}