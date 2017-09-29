'use strict';

import { Injectable } from '@angular/core';
import { Dish } from '../model/model';

@Injectable()
export class CartService {
  private dishesToBuy: Dish[];

  constructor() {
    this.dishesToBuy = [];
  }

  addDish(dish: Dish) {
    this.dishesToBuy.push(dish);
  }

  getPrice(): number {
    let res = 0;
    this.dishesToBuy.forEach(dish => {
      res += dish.price;
    });

    return res;
  }
}
