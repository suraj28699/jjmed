import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';
import { UploadForOrdersComponent } from './Home/upload-for-orders/upload-for-orders.component';
import {HttpClientModule} from '@angular/common/http';
import { AddToCartComponent } from './AddToCart/add-to-cart/add-to-cart.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadForOrdersComponent,
    AddToCartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
