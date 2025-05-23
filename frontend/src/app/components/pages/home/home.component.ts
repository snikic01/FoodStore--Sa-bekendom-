import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterModule, ActivatedRoute } from '@angular/router';
import { SearchComponent } from "../../partials/search/search.component";
import { TagsComponent } from '../../partials/tags/tags.component';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [RouterModule, RouterLink, NgFor, SearchComponent, TagsComponent, NotFoundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  foods:Food[] = [];
  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute) {

    let foodsObservable:Observable<Food[]>;

    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) 
        foodsObservable = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
       else if (params.tag) 
        foodsObservable = this.foodService.getAllFoodsByTag(params.tag);
       else 
        foodsObservable = this.foodService.getAll();

        foodsObservable.subscribe((serverFoods) => {
          this.foods = serverFoods;
        });
    })
  }

  ngOnInit(): void {
    // Initialization logic here
  }

  // Add any additional methods or properties as needed

}

@NgModule({
  declarations: [
    // Component declarations
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }