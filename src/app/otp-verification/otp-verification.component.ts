import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css'],
  providers:[ApiService]

})
export class OtpVerificationComponent implements OnInit {
  otpConfig = {
    length: 4,
    inputStyles: {
      'width': '40px',
      'height': '40px'
    }
  };

  otpValue = '';
  isButtonActive = false;
  queryParamValue: string | null = null; // Initialize it as null
  queryParamId: string | null = null; // Initialize it as null

  constructor(private router: Router,private snackBar: MatSnackBar,private route: ActivatedRoute,private apiService: ApiService) {}
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      
       this.queryParamValue = params.get('type');
       this.queryParamId = params.get('id');

      console.log('Query parameter value:', this.queryParamValue,params,this.queryParamId);

    });
  }
  queryParams = {
    _id:this.queryParamId
  };
  onOtpInputChange(event: any) {
    this.otpValue = event;
    this.isButtonActive = event.length === this.otpConfig.length;
  }
   
  verifyOTP() {
    // Replace this with your OTP verification logic
    let otpdata={
      otp:this.otpValue
    }
    console.log("this.queryParams",this.queryParams)
    const queryParams = {
      _id:this.queryParamId
    };
    this.apiService.otpVerify(otpdata, queryParams).subscribe(
      (data) => {
        console.log('User created:', data);
        // Optionally, show a success message or redirect
        if (this.queryParamValue==='forgot') {
          this.openSnackBar(data.responseMessage, 'Success');
          this.router.navigate(['/reset-password']); 
  
        }else{
          this.openSnackBar(data.responseMessage, 'Success');
          this.router.navigate(['/otp-verification/success']); 
        }  
      },
      (error) => {
        // Handle errors
        this.openSnackBar(error.error.responseMessage, 'Error');
      }
    );

  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000 // Duration in milliseconds
    });
  }
}
