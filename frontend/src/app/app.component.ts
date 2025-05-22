import { Component } from '@angular/core';
import { HeaderComponent } from "./components/partials/header/header.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
