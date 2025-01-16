import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { UploadForOrdersComponent } from './Home/upload-for-orders/upload-for-orders.component';
import { SignUpComponent } from './Home/sign-in/signIn/sign-up/sign-up.component';
import { AddToCartComponent } from './AddToCart/add-to-cart/add-to-cart.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "prescriptionUpload", component: UploadForOrdersComponent },
  { path: "signIn", loadChildren: () => import("../app/Home/sign-in/sign-in.module").then(mod => mod.SignInModule) },
  { path: "admin", loadChildren: () => import("../app/Admin/admin/admin.module").then(mod => mod.AdminModule) },
{path:"cart",component:AddToCartComponent},

  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
