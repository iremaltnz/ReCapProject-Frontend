import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarImageComponent } from './Components/car-image/car-image.component';
import { CarComponent } from './Components/car/car.component';


import { CustomerComponent } from './Components/customer/customer.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { RentCarComponent } from './Components/rent-car/rent-car.component';
import { RentalComponent } from './Components/rental/rental.component';

const routes: Routes = [
  {path:"",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"rentals",component:RentalComponent},
  {path:"customers",component:CustomerComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
 
  {path:"cars/carId/:carId",component:CarImageComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cars/carfilter/:colorId/:brandId",component:CarComponent},
  
 
  {path:"rent-car/:carId",component:RentCarComponent},
  {path:"payment",component:PaymentComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
