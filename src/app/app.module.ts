import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { AddProductModule } from './product/add/add-product.module';
import { EditProductModule } from './product/edit/edit-product.module';

import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/detail/product-details.component';
import { AddProductComponent } from './product/add/add-product.component';
import { EditProductComponent } from './product/edit/edit-product.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ProductModule,
    AddProductModule,
    EditProductModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductComponent },
      { path: 'products/:id', component: ProductDetailsComponent },
      { path: 'add', component: AddProductComponent },
      { path: 'edit/:id', component: EditProductComponent },
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
