import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Orders } from '../models/Orders';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  collectionName = 'Orders';
  collectionName2 = 'Product';

  constructor(private afs: AngularFirestore) { }

  createProduct(product: Product) {
    return this.afs.collection<Product>(this.collectionName2).doc(product.id).set(product);
  }

  updateProduct(product: Product) {
    return this.afs.collection<Product>(this.collectionName2).doc(product.id).set(product);
  }

  deleteProduct(id: string) {
    return this.afs.collection<Product>(this.collectionName2).doc(id).delete();
  }
  
  deleteOrder(id: string){
    return this.afs.collection<Orders>(this.collectionName).doc(id).delete();
  }
}
