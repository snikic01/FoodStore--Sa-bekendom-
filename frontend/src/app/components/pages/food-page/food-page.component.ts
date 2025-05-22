import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';

@Component({
  selector: 'app-food-page',
  imports: [NgFor, RouterLink, NgIf, CurrencyPipe, NotFoundComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit {

  food!: Food;
  constructor(activatetRoute:ActivatedRoute, foodService:FoodService, 
    private cartService:CartService, private router:Router) {
    activatetRoute.params.subscribe((params) => {
      if(params.id) {
        this.food = foodService.getFoodById(params.id);
      }
    });
  }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
