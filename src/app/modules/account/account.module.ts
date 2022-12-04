import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { GoogleLoginComponent } from './login/google-login/google-login.component';
import { FacebookLoginComponent } from './login/facebook-login/facebook-login.component';
import { AppleLoginComponent } from './login/apple-login/apple-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from 'src/app/shared/icons/icons.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    GoogleLoginComponent,
    FacebookLoginComponent,
    AppleLoginComponent,
    ForgotPasswordComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule
  ]
})
export class AccountModule { }
