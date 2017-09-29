'use strict';

import { Injectable } from '@angular/core';
import { Dish, Food } from '../model/model';

@Injectable()
export class DishService {
  addDish(dish: Dish) {
    // insert an dish to database;
  }

  removeDish(dishID: number) {
    // remove dish from db
  }

  retriveDishes(date: number): Dish[] {
    const dish = new Dish();
    dish.id = 1;
    dish.name = '套餐A';
    dish.desc = '超级套餐';
    dish.price = 28;
    let food = new Food();
    food.id = 1;
    food.name = '土豆片';
    food.desc = '提高智商';
    dish.foods.push(food);
    food = new Food();
    food.id = 2;
    food.name = '长豆角';
    food.desc = '养生佳品';
    dish.foods.push(food);
    return [dish];
  }

  updateDish(dish: Dish) {
    // update
  }
}
