import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Orders } from '../models/Orders';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  collectionName = 'Orders';

  constructor(private afs: AngularFirestore) { }

  create(orders:Orders, id: string){
    return this.afs.collection<Orders>(this.collectionName).doc(id).set(orders);
  }
}
