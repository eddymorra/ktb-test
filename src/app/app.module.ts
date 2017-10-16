import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';

import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details.component';
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
    RouterModule.forRoot([
      { path: 'products', component: ProductComponent },
      { path: 'products/:id', component: ProductDetailsComponent },
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
