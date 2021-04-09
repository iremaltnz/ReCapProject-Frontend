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
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarImageComponent } from './Components/car-image/car-image.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { FilterCarPipePipe } from './pipes/filter-car-pipe.pipe';
import { FilterBrandPipePipe } from './pipes/filter-brand-pipe.pipe';
import { FilterColorPipePipe } from './pipes/filter-color-pipe.pipe';
import { FilterCarComponent } from './Components/car/filter-car/filter-car.component';
import { RentCarComponent } from './Components/rent-car/rent-car.component';
import{ToastrModule} from 'ngx-toastr';
import { PaymentComponent } from './Components/payment/payment.component';

import { BrandAddComponent } from './Components/brand/brand-add/brand-add.component';
import { CarAddComponent } from './Components/car/car-add/car-add.component';
import { ColorAddComponent } from './Components/color/color-add/color-add.component';
import { BrandUpdateComponent } from './Components/brand/brand-update/brand-update.component';

import { BrandListComponent } from './Components/brand/brand-list/brand-list.component';
import { ColorListComponent } from './Components/color/color-list/color-list.component';
import { ColorUpdateComponent } from './Components/color/color-update/color-update.component';
import { CarUpdateComponent } from './Components/car/car-update/car-update.component';
import { LoginComponent } from './Components/login/login.component'; 
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { RegisterComponent } from './Components/register/register.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { CardComponent } from './Components/card/card.component';
import { PasswordCheckDirective } from './directives/password-check.directive';
import { InputFormControlComponent } from './Components/input-form-control/input-form-control.component';




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
    BrandAddComponent,
    CarAddComponent,
    ColorAddComponent,
    BrandUpdateComponent,
    
    BrandListComponent,
    
    ColorListComponent,
    
    ColorUpdateComponent,
    
    CarUpdateComponent,
    
    LoginComponent,
    
    RegisterComponent,
    
    UserProfileComponent,
    
    CardComponent,
    
    PasswordCheckDirective,
    
    InputFormControlComponent,
 
    
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
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
