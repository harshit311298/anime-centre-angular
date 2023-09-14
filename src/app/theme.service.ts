import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('isDarkMode', this.isDarkMode.toString());
    console.log('Theme toggled:', this.isDarkMode);
  }

  isDarkTheme() {
    return this.isDarkMode;
  }
}
