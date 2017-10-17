import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement }    from '@angular/core';

import { ProductComponent } from './product.component';
import { ProductService } from './product.service';

import { Product } from './product';
import { Brand } from './brand';
import { Categories } from './categories';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let debug: DebugElement;
  let htmlElem: HTMLElement;

  beforeEach(async(() => {
    //_productServiceStub = {};
    let products: Product[];
    let brands: Brand[];
    let categories: Categories[];

    TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      //providers: [ {provide: ProductService, useValue: _productServiceStub} ]
      providers: [ ProductService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    //_productServiceStub = TestBed.get(ProductService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test JSON non null', () => {
    this._productService.getProductsFromAPI();
    expect(component).toBeTruthy();
  });
});
