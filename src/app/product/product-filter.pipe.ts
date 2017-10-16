import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

    transform(value: Product[], searchTerm: string = '') {
        if (searchTerm !== '') {
            let result = value.filter((product: Product) => 
                product.description.toLowerCase().includes(searchTerm) || 
                product.name.toLowerCase().includes(searchTerm));
            return result;
        } else {
            return value;
        }
    }

}