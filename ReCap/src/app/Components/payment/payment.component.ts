import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import{FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';
import { ToastrService } from 'ngx-toastr';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentForm:FormGroup
  
  @Input() rental:Rental
 

  

  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private paymentService:PaymentService,
    private toastrService:ToastrService,
    private rentalService:RentalService) { }

  ngOnInit(): void {

    this.createPaymentForm()
   
  }

  createPaymentForm(){
     this.paymentForm=this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      cardNumber:["",Validators.required],
      yearOfExpiration:["",Validators.required],
      monthOfExpiration:["",Validators.required],
      cVV:["",Validators.required]
     })

     
  }

  paymentCheck(){
  
    let paymentModel=Object.assign({},this.paymentForm.value)

    console.log(paymentModel)
    this.paymentService.paymentCheck(paymentModel).subscribe(response=>{
      this.toastrService.success("Ödeme Bilgileri Onaylandı","İşlem Başarılı")
        this.rentAdd()
    },responseError=>{
      this.toastrService.error("Ödeme Bilgileri Onaylanmadı","İşlem Başarsız")
           
      this.router.navigate(["/cars"])
    }
         
    )    
      
    
  
  }
  
 
  rentAdd(){

     
    this.rentalService.add(this.rental).subscribe(data=>{
             this.toastrService.success(data.message,"Başarılı");
         
    },dataError=>{
      this.toastrService.error(dataError.message, "Hata")
    })
  }
}
