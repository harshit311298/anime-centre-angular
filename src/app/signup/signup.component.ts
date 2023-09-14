import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, Validators,AbstractControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[ApiService]
})
export class SignupComponent implements OnInit {
  form!: FormGroup;
  showPassword = false; // Initial value

  @ViewChild('fullNameField') fullNameField!: ElementRef;
  @ViewChild('userNameField') userNameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('phoneNumber') phoneNumber!: ElementRef;
  @ViewChild('password') password!: ElementRef;
  @ViewChild('confirmPassword') confirmPassword!: ElementRef;

  constructor(private formBuilder: FormBuilder, private router: Router,private apiService: ApiService,private snackBar: MatSnackBar) {}
    ngOnInit() {
    this.form = this.formBuilder.group({
      // Define form controls and their initial values
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userName:['', Validators.required],
      phoneNumber:['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)]],
      confirmPassword:['',Validators.required],
      gender: ['male', Validators.required] // Set a default value if needed
    },{
      validator: this.passwordMatchValidator // Add custom validator to the form group
    }
    );
    // this.form.get('confirmPassword')?.setValidators([Validators.required, this.passwordMatchValidator.bind(this)]);
    console.log("===========>form DTA",this.form.value)
  }
  
  onGenerateClick() {
  if (this.form.invalid) {
      if (this.form.get('fullName')?.invalid) {
        this.fullNameField.nativeElement.focus();
      }
      else if (this.form.get('userName')?.invalid) {
        this.userNameField.nativeElement.focus();
      } 
      else if (this.form.get('email')?.invalid) {
        this.emailField.nativeElement.focus();
      }
      else if (this.form.get('phoneNumber')?.invalid) {
        this.phoneNumber.nativeElement.focus();
      }
      else if (this.form.get('password')?.invalid) {
        this.password.nativeElement.focus();
      }
      else if (this.form.get('confirmPassword')?.invalid) {
        this.confirmPassword.nativeElement.focus();
      }
      // ... handle other fields ...
    }
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      control.get('confirmPassword')?.setErrors(null);
    }
  }
  
  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.valid,"form dta",this.form,"================\n",this.form.get('password'));
      // if (response.success) {
        this.apiService.createUser(this.form.value).subscribe(
          (data) => {
            console.log('User created:', data);
            // Optionally, show a success message or redirect
            this.openSnackBar(data.responseMessage, 'Success');
            this.router.navigate(['/otp-verification'], { queryParams: { type: 'registration',id:data.result._id } });
          },
          (error) => {
            // console.log("===========>errror singup component",error.error.responseMessage)
            this.openSnackBar(error.error.responseMessage, 'Error');
          }
        );
      // Replace with your route
      // }
    } 
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000 // Duration in milliseconds
    });
  }
}
