import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { UserLoginComponent } from './Components/Login/user-login/user-login.component';
import { UserRegistrationComponent } from './Components/Register/user-registration/user-registration.component';
import { DashboardComponent } from './Components/Panel/dashboard/dashboard.component';
import { CartComponent } from './Components/cart/cart.component';
import { RetailerLoginComponent } from './Components/Login/retailer-login/retailer-login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cart', component: CartComponent },
  { path: 'retailer-login', component: RetailerLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
