import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRemoveGeneralProductsComponent } from './add-remove-general-products/add-remove-general-products.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes:Routes=[
  {path:"",component:AddRemoveGeneralProductsComponent},
  

  {path:"**",redirectTo:""}
]

@NgModule({
  declarations: [
    AddRemoveGeneralProductsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
