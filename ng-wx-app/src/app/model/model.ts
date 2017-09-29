'use strict';

export class Dish {
  id: number;
  name: string;
  foods: Food[];
  price: number;
  desc: string;
  createdDate: number;

  constructor() {
    this.foods = [];
  }
}

export class Food {
  id: number;
  imgsrc: string;
  name: string;
  createdDate: number;
  price: number;
  desc: string;
}
