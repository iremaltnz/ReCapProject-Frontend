import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import{FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';
import { ToastrService } from 'ngx-toastr';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/local-storage.service';

import { CardService } from 'src/app/services/card.service';
import { CreditCard } from 'src/app/models/creditCard';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentForm:FormGroup
  
  @Input() rental:Rental
 
 
 user:User;
 creditCards:CreditCard[];

  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private paymentService:PaymentService,
    private toastrService:ToastrService,
    private rentalService:RentalService,
    private localStorageService:LocalStorageService,
    private cardService:CardService) { }

  ngOnInit(): void {
    this.user=this.localStorageService.getItem('user');

    this.createPaymentForm()
    this.getCard(this.user.id);
  this.rental=  this.getRental();
  }

  createPaymentForm(){
     this.paymentForm=this.formBuilder.group({
      userId:[Number(this.user.id),Validators.required],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      cardNumber:["",Validators.required],
      yearOfExpiration:["",Validators.required],
      monthOfExpiration:["",Validators.required],
      cVV:["",Validators.required]
     })

     
  }

  paymentCheck(){
  
    this.paymentService.paymentCheck().subscribe(response=>{
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
    
      this.toastrService.error(dataError.error.message
      , "Hata"),console.log(dataError.error);
      
    })
  }

  getCard(userId:number){
    this.cardService.getCard(userId).subscribe(response=>{
      this.creditCards=response.data
    })
   }

   getRental(){
    return this.localStorageService.getItem("rent-data");
   }

   addCard(){

    let paymentModel=Object.assign({},this.paymentForm.value)
    this.cardService.addCard(paymentModel).subscribe(response=>{
      this.toastrService.success(response.message,"İşlem Başarılı")

    },responseError=>{
      this.toastrService.error(responseError.error.Message,"İşlem Başarsız")
           
      this.router.navigate(["/cars"])
    })}
   
}
