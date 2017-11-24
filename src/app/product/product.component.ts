import { Component, OnInit, DoCheck } from '@angular/core';
import { Product } from './product';
import { Brand } from './brand';
import { Categories } from './categories';
import { ProductService } from './product.service';

@Component({
  moduleId: module.id,
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, DoCheck {

  products: Product[] = [];
  brands: Brand[];
  categories: Categories[];

  nbrItemPerPage = 10;
  tabPage: number[] = [];
  debPage = 0;
  finPage = 10;

  constructor(private _productService: ProductService) {}

  ngOnInit() {
    this._productService.getProductsFromAPI()
      .subscribe(
        res => this.products = res,
        err => console.log(err.status)
      );

    this._productService.getBrandsFromAPI()
      .subscribe(
          res => this.brands = res,
          err => console.log(err.status)
      );

    this._productService.getCategoriesFromAPI()
    .subscribe(
        res => this.categories = res,
        err => console.log(err.status)
    );
  }

  ngDoCheck() {
    const long = this.products.length;
    const nbrPage = Math.ceil(long / this.nbrItemPerPage);
    this.tabPage = [];
    for (let i = 0; i < nbrPage; i++) { this.tabPage.push(i); }
  }

  selectPage(e, page) {
    e.preventDefault();
    this.debPage = page * this.nbrItemPerPage;
    this.finPage = this.debPage + this.nbrItemPerPage;
    const liPage = document.querySelectorAll('li.active');
    console.log(liPage);
    for (let j = 0; j < liPage.length; j++) { liPage[j].classList.remove('active'); }
    e.target.parentElement.classList.add('active');
  }

}
