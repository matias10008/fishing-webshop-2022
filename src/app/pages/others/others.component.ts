import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { itemNames, itemPrices } from '../../app.component';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent implements OnInit {

  items: Observable<any[]>;
  constructor(firestore: AngularFirestore){
    this.items = firestore.collection('Product', ref => ref.where('type', '==', 'others').orderBy('price')).valueChanges();
  }

  ngOnInit(): void {
   
  }
  addtoCart(name:string,price:number){
    itemNames.push(name)
    itemPrices.push(price);
  }
}
