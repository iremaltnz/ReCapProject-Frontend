import { Component, OnInit } from '@angular/core';
import { CreditCard } from 'src/app/models/creditCard';
import { User } from 'src/app/models/user';
import { CardService } from 'src/app/services/card.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private cardService:CardService,private localStorageService:LocalStorageService) { }

  user:User;
  creditCards:CreditCard[];

  ngOnInit(): void {
    this.user=this.localStorageService.getItem('user');
    console.log(this.user);
    this.cardList(this.user.id);
  }

  cardList(userId:number){
   this.cardService.getCard(userId).subscribe(response=>{
     this.creditCards=response.data,console.log(response.data)
   })
  }

  

}
