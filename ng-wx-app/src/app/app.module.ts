import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdButtonModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store.component';
import { CartComponent } from './cart.component';
import { SettleComponent } from './settle.component';
import { DishService } from './services/dish.service';
import { CartService } from './services/cart.service';
import { WeChatAPIService } from './services/wechat-api.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    CartComponent,
    SettleComponent
  ],
  imports: [
    BrowserModule,
    MdButtonModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [WeChatAPIService, DishService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
