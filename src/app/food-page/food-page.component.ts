import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Food } from '../shared/models/food';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {

  food!: Food | undefined;

  constructor(private foodService: FoodService, private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {

    this.route.params.subscribe(p => {
      if (p['id']) {
        this.food = this.foodService.getById(p['id']);
        console.log(this.food);
      }
    });
  }

  addToCart(): void {
    if (this.food) {
      this.cartService.addToCart(this.food);
      this.router.navigateByUrl("/cart-page");
    }
  }
}
