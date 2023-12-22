// auth.service.ts
// import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private authToken: string | null = null;

  constructor() {}

  // // Simulate user login
  // login(username: string, password: string): boolean {
  //   if (username === 'user' && password === 'password') {
  //     this.isAuthenticated = true;
  //     this.authToken = 'example_token'; // Store the token
  //     return true;
  //   }
  //   return false;
  // }
  login(token:any) {
    // Perform authentication logic here if needed
    // For now, we'll simply set isAuthenticated to true
    this.isAuthenticated = true;
    this.authToken=token
  }

  // Simulate user logout
  logout(): void {
    this.isAuthenticated = false;
    this.authToken = null;
  }

  // Check if the user is authenticated
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  // Get the authentication token
  getAuthToken(): string | null {
    return this.authToken;
  }
}
