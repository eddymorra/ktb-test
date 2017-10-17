import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement }    from '@angular/core';

import { ProductComponent } from './product.component';
import { ProductService } from './product.service';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let debug: DebugElement;
  let htmlElem: HTMLElement;

  beforeEach(async(() => {
    //_productServiceStub = {};

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
});
