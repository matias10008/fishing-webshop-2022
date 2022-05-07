import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { itemNames, itemPrices } from '../../app.component';

@Component({
  selector: 'app-baits',
  templateUrl: './baits.component.html',
  styleUrls: ['./baits.component.scss']
})
export class BaitsComponent implements OnInit {
  
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('Product', ref => ref.where('type', '==', 'baits').orderBy('price')).valueChanges();
   }

  ngOnInit(): void {
  }
  
  addtoCart(name:string,price:number){
    itemNames.push(name)
    itemPrices.push(price);
  }
}
