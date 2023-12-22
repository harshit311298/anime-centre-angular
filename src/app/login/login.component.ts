import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Replace with the actual path
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  showPassword = false; // Initial value
  constructor(private router: Router, private authService: AuthService, private apiService: ApiService, private snackBar: MatSnackBar, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      // Define form controls and their initial values
      logginId: ['', Validators.required],
      password: ['', [Validators.required]],
    }
    );
    // this.form.get('confirmPassword')?.setValidators([Validators.required, this.passwordMatchValidator.bind(this)]);
    console.log("===========>form DTA", this.form.value)
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  clicklogin() {
    this.form.get('logginId')?.markAsTouched();
    this.form.get('password')?.markAsTouched();
    if (this.form.valid) {
      this.apiService.login(this.form.value).subscribe(
        (data) => {
          console.log('User created:', data);
          // Optionally, show a success message or redirect
          // this.authService.login(data.result.token);
          if (data.responseCode == 201) {
            this.openSnackBar(data.responseMessage, 'Success');
            this.router.navigate(['/otp-verification'], { queryParams: { type: 'registration', id: data.result._id } });
          }
          else if (data.responseCode == 200) {
            this.authService.login(data.result.token);
            this.openSnackBar(data.responseMessage, 'Success');
            this.router.navigate(['']);
          }

          // this.openSnackBar(data.responseMessage, 'Success');
          // this.router.navigate(['/otp-verification'], { queryParams: { type: 'registration',id:data.result._id } });
        },
        (error) => {
          // console.log("===========>errror singup component",error.error.responseMessage)
          this.openSnackBar(error.error.responseMessage, 'Error');
        }
      );
    }else{
      this.openSnackBar("Please fill the details", 'Error');
    }



    // this.router.navigate(['']);
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000 // Duration in milliseconds
    });
  }
}
