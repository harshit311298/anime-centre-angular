import { Component } from '@angular/core';
import { ThemeService } from './theme.service'; // Import ThemeService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor(public themeService: ThemeService) {
    console.log('ThemeService:', this.themeService);
  }
  
}
