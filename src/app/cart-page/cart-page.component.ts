import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {

  cart!: Cart;

  constructor(private cartService: CartService) {
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem: CartItem): void {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantity: string): void {

    const q = parseInt(quantity);
    this.cartService.changeQuantity(cartItem.food.id , q);
    this.setCart();
  }
}
