import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './Components/brand/brand.component';
import { NaviComponent } from './Components/navi/navi.component';
import { ColorComponent } from './Components/color/color.component';
import { CarComponent } from './Components/car/car.component';
import { RentalComponent } from './Components/rental/rental.component';
import { CustomerComponent } from './Components/customer/customer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CarImageComponent } from './Components/car-image/car-image.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { FilterCarPipePipe } from './pipes/filter-car-pipe.pipe';
import { FilterBrandPipePipe } from './pipes/filter-brand-pipe.pipe';
import { FilterColorPipePipe } from './pipes/filter-color-pipe.pipe';
import { FilterCarComponent } from './Components/car/filter-car/filter-car.component';
import { RentCarComponent } from './Components/rent-car/rent-car.component';
import{ToastrModule} from 'ngx-toastr';
import { PaymentComponent } from './Components/payment/payment.component';
import { PaymentSuccessComponent } from './Components/payment/payment-success/payment-success.component'; 


@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    NaviComponent,
    ColorComponent,
    CarComponent,
    RentalComponent,
    CustomerComponent,
    CarImageComponent,
    SideBarComponent,
    FilterCarPipePipe,
    FilterBrandPipePipe,
    FilterColorPipePipe,
    FilterCarComponent,
    RentCarComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"}
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
