import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

    transform(value: Product[], searchTerm: string = '', searchCat: string = '', searchBrand: string = '') {
        console.log(searchTerm);
        console.log(searchBrand);
        
        if (searchTerm !== '' || searchCat !== '' || searchBrand !== '') {
            if (searchTerm !== '' && searchCat == '' && searchBrand == '') {
                let result = value.filter((product: Product) => 
                    product.description.toLowerCase().includes(searchTerm) || 
                    product.name.toLowerCase().includes(searchTerm)
                );
                return result;
            } else if (searchTerm == '' && searchCat == '' && searchBrand !== '') {
                let result = value.filter((product: Product) => 
                    product.brand.id.includes(searchBrand)
                );
                return result;
            } /*else if (searchTerm == '' && searchCat !== '' && searchBrand == '') {
                let result = value.filter((product: Product) => 
                    product.categories.id.includes(searchCat)
                );
                return result;
            }*/
        } else {
            return value;
        }
    }

}