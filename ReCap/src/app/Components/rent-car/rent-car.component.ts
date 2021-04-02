import { Component, OnInit, Output } from '@angular/core';
import{FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';




import { CarDetail } from 'src/app/models/carDetail';
import { CustomerDetail } from 'src/app/models/customerDetail';
import { Rental } from 'src/app/models/rental';
import { CustomerService } from 'src/app/services/customer.service';

import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private rentalService:RentalService,
    private router:Router,
    private customerService:CustomerService,
    private activatedRoute:ActivatedRoute) { }

  rentCarForm:FormGroup;

  rental:Rental
  rent:Rental

  carId:number;
  customerId:number;
  rentDate:Date;
  returnDate:Date;

  carId2:number;
  customerId2:number;
  rentDate2:Date;
  returnDate2:Date;
  
  customers:CustomerDetail[];
  currentCustomerId:number;

  paymentCheck:boolean;

  ngOnInit(): void {
    
    this.createRentCarForm();
    this.getCustomer();
    
  
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"] ){
        this.carId=params["carId"];
      }})
  
    
  }

  createRentCarForm(){
    this.rentCarForm=this.formBuilder.group({
         rentDate:["",Validators.required],
          returnDate:["",Validators.required],
    })
  }
     
 
      check(){   

     this. rental={
      
      carId:Number(this.carId),
      customerId:this.currentCustomerId,
      rentDate:this.rentDate,
      returnDate:this.returnDate
    };
      
    console.log(this.rental);

        this.rentalService.check(this.rental).subscribe(data=>{
         
            this.paymentCheck=true;
            this.toastrService.success(data.message,"Başarılı");
           
        },dataError=>{
          this.toastrService.error("Araba bu tarihler arasında kiralanamaz ","Başarısız");
          this.router.navigate(["cars"])
        }
     
        )
      }

      getCustomer(){
        this.customerService.getCustomer().subscribe(response=>{
          this.customers=response.data,console.log(response.data)
        })
      }

    

     
   
}
  


