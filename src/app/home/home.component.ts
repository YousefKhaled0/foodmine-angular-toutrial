import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  foods: Food[] = [];

  foodName: string = "";

  tag: string = "";

  constructor(private foodService: FoodService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {


    this.route.params.subscribe(params => {

      this.foodName = params['foodName'];

      this.tag = params['tag'];

      if (this.foodName) {

        this.foods = this.foodService.getBySearchCriteria(this.foodName);
      }
      else if (this.tag){

        this.foods = this.foodService.getByTag(this.tag);
        this.foodService.getAlltags();
      }
      else {
        
        this.foods = this.foodService.getAll();
      }
      
    });
  }
}
