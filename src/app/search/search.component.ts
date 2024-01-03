import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  foodName: string = "";

  constructor(private router: Router, private route: ActivatedRoute) {

    this.route.params.subscribe(params => {

      this.foodName = params['foodName'];
    });
  }

  search(): void {

    console.log(this.foodName);

    this.router.navigate([
      "/search", this.foodName
    ]);
  }
}
