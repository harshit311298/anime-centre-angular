import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  form!: FormGroup;
  showPassword = false; // Initial value
  constructor(private formBuilder: FormBuilder,private router: Router,private snackBar: MatSnackBar) {}
    ngOnInit() {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)]],
      confirmPassword:['',Validators.required],
    },{
      validator: this.passwordMatchValidator // Add custom validator to the form group
    }
    );
    // this.form.get('confirmPassword')?.setValidators([Validators.required, this.passwordMatchValidator.bind(this)]);
    console.log("===========>form DTA",this.form.value)
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
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.valid,"form dta",this.form,"================\n",this.form.get('password'));
      // if (response.success) {
        this.openSnackBar('Your password is changed successfully','Success')
        this.router.navigate(['/login']); 
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





