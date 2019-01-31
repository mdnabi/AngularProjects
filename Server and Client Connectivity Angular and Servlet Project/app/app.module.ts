import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './product/product-list.component';
import { ProductService } from './product/product-service';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { AddProductComponent } from './product/add-product.component';



import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'add-prod',component: AddProductComponent},

        {path: 'pro-list',component: ProductListComponent}

    ])
  ],
    providers: [ProductService,HttpClient], 
   bootstrap: [AppComponent]
})
export class AppModule { }
