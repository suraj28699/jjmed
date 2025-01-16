import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './signIn/sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes:Routes=[
  {path:"",component:SignUpComponent}
]

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
   
  ]
})
export class SignInModule { }
