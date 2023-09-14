import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Adjust the path to match your AuthService location
import { ThemeService } from '../theme.service'; // Import your ThemeService

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router,public authService: AuthService,public themeService: ThemeService) {}

 // Define a property to track whether the user is logged in
 userIsLoggedIn: boolean = false;
 clicklogin(){
  this.userIsLoggedIn = true;

  this.router.navigate(['/login']);
 }
 // Add your authentication logic to set userIsLoggedIn accordingly
 // For example, you might set it to true when the user logs in and false when they log out.
 
 // This method should be called when the user logs in
 clickProfileIcon() {
  // Implement your logic here, such as navigating to the user's profile
  this.router.navigate(['/my-profile']);

  console.log('Profile icon clicked');
}
 login() {
   // Perform the login logic here
   // After successful login, set userIsLoggedIn to true
   this.userIsLoggedIn = true;

 }

 // This method should be called when the user logs out
 logout() {
   // Perform the logout logic here
   // After successful logout, set userIsLoggedIn to false
   this.userIsLoggedIn = false;
 }
 toggleTheme() {
  // Call the toggleTheme method in your ThemeService
  this.themeService.toggleTheme();
}
}
