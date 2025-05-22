import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [NgStyle],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit {

  constructor() {
    // Initialization logic can go here
  }

  @Input()
  title: string = '';

  @Input()
  margin? = '1rem 0 1rem 0.1rem';

  @Input()
  fontSize? = '1.5rem';

  ngOnInit(): void {
    // Additional initialization logic can go here
  }

}
