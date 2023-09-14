import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgot_password!: FormGroup;
  @ViewChild('emailField') emailField!: ElementRef;


  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.forgot_password = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
    });
  }
  onGenerateClick() {
    if (this.forgot_password.invalid) {
      if (this.forgot_password.get('email')?.invalid) {
        this.emailField.nativeElement.focus();
      }
    }
  }
  onSubmit() {
    if (this.forgot_password.valid) {
      console.log(this.forgot_password.valid, "form dta", this.forgot_password, "================\n", this.forgot_password.get('email'));
      this.router.navigate(['/otp-verification'], { queryParams: { type: 'forgot' } });
    }

    console.log(this.forgot_password.value);
  }
}
