import { Component, Input } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {

  @Input()
  foodTags?: string[];

  tags?: Tag[];

  constructor(private foodService: FoodService) {

  }

  ngOnInit(): void {

    if (!this.foodTags)
      this.tags = this.foodService.getAlltags();
  }
}
