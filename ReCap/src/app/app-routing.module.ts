import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './Components/brand/brand-add/brand-add.component';

import { BrandListComponent } from './Components/brand/brand-list/brand-list.component';
import { BrandUpdateComponent } from './Components/brand/brand-update/brand-update.component';
import { BrandComponent } from './Components/brand/brand.component';
import { CarImageComponent } from './Components/car-image/car-image.component';
import { CarAddComponent } from './Components/car/car-add/car-add.component';
import { CarUpdateComponent } from './Components/car/car-update/car-update.component';
import { CarComponent } from './Components/car/car.component';
import { CardComponent } from './Components/card/card.component';
import { ColorAddComponent } from './Components/color/color-add/color-add.component';
import { ColorListComponent } from './Components/color/color-list/color-list.component';
import { ColorUpdateComponent } from './Components/color/color-update/color-update.component';


import { CustomerComponent } from './Components/customer/customer.component';
import { LoginComponent } from './Components/login/login.component';

import { PaymentComponent } from './Components/payment/payment.component';
import { RegisterComponent } from './Components/register/register.component';
import { RentCarComponent } from './Components/rent-car/rent-car.component';
import { RentalComponent } from './Components/rental/rental.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';

const routes: Routes = [
  {path:"",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"brands",component:BrandListComponent},
  {path:"colors",component:ColorListComponent},
  {path:"user",component:UserProfileComponent},

  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},

  {path:"brand-update/:brandId",component:BrandUpdateComponent},
  {path:"color-update/:colorId",component:ColorUpdateComponent},
  {path:"car-update/:carId",component:CarUpdateComponent},


  {path:"rentals",component:RentalComponent},
  {path:"customers",component:CustomerComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
 
  {path:"cars/carId/:carId",component:CarImageComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cars/carfilter/:colorId/:brandId",component:CarComponent},
  
 
  {path:"rent-car/:carId",component:RentCarComponent},
  {path:"payment",component:PaymentComponent},
  {path:"brand-add",component:BrandAddComponent},
  {path:"color-add",component:ColorAddComponent},
  {path:"car-add",component:CarAddComponent},

  {path:"card-list",component:CardComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
