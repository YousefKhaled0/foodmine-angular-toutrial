import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/food';
import { Tag } from '../../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getBySearchCriteria(foodName: string): Food[] {

    let foods = this.getAll();

    return foods.filter(f => f.name.toLowerCase().includes(foodName.toLowerCase()));
  }

  getById(id: number): Food | undefined {

    let foods = this.getAll();

    let food = foods.find(f => f.id == id);

    return food;
  }

  getByTag(tag: string): Food[] {

    let foods = this.getAll();

    return tag === "All" ? foods : foods.filter(f => f.tags?.includes(tag));
  }

  getAlltags(): Tag[] {

    let foods = this.getAll();

    let d = {} as Record<string, Tag>;

    d['All'] = { name: 'All', count: 0 };

    foods.flatMap(f => f.tags)
      .forEach(tag => {
        if (tag) {
          if (!d[tag]) d[tag] = { name: tag, count: 0 };
          d[tag].count = d[tag].count + 1;
          d[tag].name = tag;
          d['All'].count++;
        }
      });

    return Object.values(d);
  }

  getAll(): Food[] {

    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ];
  }
}
