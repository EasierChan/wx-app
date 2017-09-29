'use strict';

import { Component, OnInit } from '@angular/core';
import { DishService } from './services/dish.service';
import { CartService } from './services/cart.service';
import { DatePipe } from '@angular/common';
import { Dish } from './model/model';

@Component({
  moduleId: module.id,
  selector: 'app-store',
  templateUrl: 'store.html',
  styleUrls: ['store.css']
})
export class StoreComponent implements OnInit {
  today: number;
  weekday: number;
  amount: number;
  dishes: Dish[];

  constructor(private dishSrv: DishService,
  private cartSrv: CartService) {
  }

  ngOnInit() {
    this.today = Date.now();
    this.weekday = new Date().getDay();
    this.amount = 0;
    this.dishes = this.dishSrv.retriveDishes(null);
  }

  putintoCart(dish: Dish) {
    this.cartSrv.addDish(dish);
    this.amount = this.cartSrv.getPrice();
  }
}
