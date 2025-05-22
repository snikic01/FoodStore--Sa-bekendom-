import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [NgIf, RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit {

  //putanje i vidljivost elementa
  @Input()
  visible: boolean = false;
  @Input() 
  notFoundMessage = "The page you are looking for does not exist.";
  @Input()
  resetLinkText = "Reset";
  @Input()
  resetLinkRoute = "/";

  constructor() {}

  ngOnInit(): void {
    // Initialization logic can go here
  }

}
