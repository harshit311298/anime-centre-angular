import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { HeaderComponent } from './header/header.component';
import { FeaturedContentComponent } from './featured-content/featured-content.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { WordLimitPipe } from './word-limit.pipe';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { OurFeaturesComponent } from './our-features/our-features.component';
import { StoryModalComponent } from './story-modal/story-modal.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ChatComponent } from './chat/chat.component';
import { PostComponent } from './post/post.component';
import { AuthService } from './auth.service'; // Replace with your actual AuthService import
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { ThemeToggleButtonComponent } from './theme-toggle-button/theme-toggle-button.component'; // Import the AuthService
import { ThemeService } from './theme.service'; // Import your ThemeService here
import { AuthGuard } from './auth.guard.service'; // Import your AuthGuard

const appRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'otp-verification',      component: OtpVerificationComponent },
  { path: 'otp-verification/success',      component: RegistrationSuccessComponent },
  { path: 'forgot-password',      component: ForgotPasswordComponent },
  { path: 'reset-password',      component: ResetPasswordComponent },
  { path: 'privacy-policy',      component: PrivacyPolicyComponent },
  { path: '', component: HomeComponent },
  { path: 'tv-shows', component: TvShowsComponent },
  { path: 'our-features', component: OurFeaturesComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'view-post', component: ViewPostComponent },

  // { path: '',
  //   canActivate: [AuthGuard], // Add the AuthGuard to protect this route
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    OtpVerificationComponent,
    RegistrationSuccessComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    PrivacyPolicyComponent,
    HeaderComponent,
    FeaturedContentComponent,
    FooterComponent,
    HomeComponent,
    TvShowsComponent,
    WordLimitPipe,
    OurFeaturesComponent,
    StoryModalComponent,
    SidebarComponent,
    ChatComponent,
    PostComponent,
    MyProfileComponent,
    SettingsComponent,
    ViewPostComponent,
    ThemeToggleButtonComponent
  ],

    imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    SlickCarouselModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule
    // other imports here
  ],
  providers: [AuthService,ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }