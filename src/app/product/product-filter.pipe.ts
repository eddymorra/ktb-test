import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

    transform(value: Product[], searchTerm: string = '', searchCat: string = '', searchBrand: string = '') {
        if (searchTerm != '' || searchCat != '' || searchBrand != '') {
            if (searchTerm != '' && searchCat == '' && searchBrand == '') {
                let result = value.filter((product: Product) => 
                    product.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
                    product.name.toLowerCase().includes(searchTerm.toLowerCase())
                );
                return result;
            } else if (searchTerm == '' && searchCat == '' && searchBrand != '') {
                let result = value.filter((product: Product) => 
                    product.brand.name.toLowerCase().includes(searchBrand.toLowerCase())
                );
                return result;
            } else if (searchTerm == '' && searchCat != '' && searchBrand == '') {
                let result = value.filter((product: Product) => 
                    product.categories[0].name.toLowerCase().includes(searchCat.toLowerCase())
                );
                return result;
            } else if (searchTerm != '' && searchCat != '' && searchBrand == '') {
                let result = value.filter((product: Product) => 
                    (product.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
                    product.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
                    product.categories[0].name.toLowerCase().includes(searchCat.toLowerCase())
                );
                return result;
            } else if (searchTerm != '' && searchCat == '' && searchBrand != '') {
                let result = value.filter((product: Product) => 
                    (product.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
                    product.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
                    product.brand.name.toLowerCase().includes(searchBrand.toLowerCase())
                );
                return result;
            } else if (searchTerm == '' && searchCat != '' && searchBrand != '') {
                let result = value.filter((product: Product) => 
                    product.categories[0].name.toLowerCase().includes(searchCat.toLowerCase()) &&
                    product.brand.name.toLowerCase().includes(searchBrand.toLowerCase())
                );
                return result;
            }
        } else {
            return value;
        }
    }

}