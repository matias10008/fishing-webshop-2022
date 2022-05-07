import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { itemNames, itemPrices } from '../../app.component';

@Component({
  selector: 'app-rods',
  templateUrl: './rods.component.html',
  styleUrls: ['./rods.component.scss']
})
export class RodsComponent implements OnInit {

  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) { 
    this.items = firestore.collection('Product', ref => ref.where('type', '==', 'rod').orderBy('price')).valueChanges();
  }

  ngOnInit(): void {
  }

  addtoCart(name:string,price:number){
    itemNames.push(name)
    itemPrices.push(price);
  }
}
