import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { OrderServiceService } from '../../shared/services/order-service.service';
import { itemNames, itemPrices } from '../../app.component';
import { Orders } from '../../shared/models/Orders';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  
  cartlength = itemNames.length;
  cartNames = itemNames;
  cartPrices = itemPrices;
  result = 0;
  customid = this.makeid(8);
  today = new Date();
  signUpForm = new FormGroup({
      buyer: new FormControl(''),
      address: new FormControl('')
    });

  constructor(firestore: AngularFirestore, private orderService: OrderServiceService) { }

  
  ngOnInit(): void {
    this.cartsum();
  }

  removefromCart(item:string){
    this.cartNames.forEach((value,index) => {
      if(value === item){
        this.cartNames.splice(index,1);
        this.cartPrices.splice(index,1);
      }
        
    });
  }
  cartsum(){
    this.result = this.cartPrices.reduce((acc, curr) => {
      return acc + curr;
    }, 0)
  }
  clearCart(){
    this.cartNames = [];
    this.cartPrices = [];
    window.location.reload();
  }

  onSubmit(){
     const order: Orders = {
      id: this.customid,
      buyer: this.signUpForm.get('buyer')?.value,
      products: this.cartNames,
      date: this.today.toString(),
      address: this.signUpForm.get('address')?.value,
      price: this.result
    };
    this.orderService.create(order, this.customid).then(_=> {
      window.location.reload();
    }).catch(error => {
      console.error(error);
    });
  }
  makeid(idlength : number){
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let index = 0; index < idlength; index++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
