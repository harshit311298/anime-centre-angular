import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Replace with the actual path

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPassword = false; // Initial value
  constructor(private router: Router,private authService: AuthService) {}

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  clicklogin(){
    this.authService.login();

    this.router.navigate(['']);
  }
}
