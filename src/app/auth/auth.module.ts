import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
  ]
})
export class AuthModule { }
