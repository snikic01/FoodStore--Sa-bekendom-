import { Component, OnInit } from '@angular/core';
import { Tag } from '../../../shared/models/Tag';
import { FoodService } from '../../../services/food.service';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-tags',
  imports: [RouterLink, NgIf, NgFor],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit {

  tags?: Tag[];
  constructor(foodService:FoodService) {
    this.tags = foodService.getAllTags();
  }

  ngOnInit(): void {
    // Initialization logic here
  }

  // Add any additional methods or properties as needed

}
