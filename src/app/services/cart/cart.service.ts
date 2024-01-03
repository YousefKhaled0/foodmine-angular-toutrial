import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/cart';
import { Food } from '../../shared/models/food';
import { CartItem } from '../../shared/models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = new Cart();

  constructor() { }

  addToCart(food: Food): void {

    let cartItem = this.cart.items.find(i => i.food.id == food.id);

    if (cartItem) {

      this.changeQuantity(cartItem.food.id, cartItem.quantity + 1);

      return;
    }

    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodId: number): void {

    this.cart.items = this.cart.items.filter(i => i.food.id != foodId);
  }

  changeQuantity(foodId: number, quantity: number): void {

    let cartItem = this.cart.items.find(i => i.food.id == foodId);

    if (cartItem) {

      cartItem.quantity = quantity;
    }
  }

  getCart(): Cart {

    return this.cart;
  }
}
