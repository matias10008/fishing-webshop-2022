import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AdminService } from 'src/app/shared/services/admin.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/Product';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  newProductForm = new FormGroup({
    Img_url: new FormControl(''),
    Name: new FormControl(''),
    availablePieces: new FormControl(''),
    price: new FormControl(''),
    type: new FormControl('')
  })

  products: Observable<any[]>;
  orders: Observable<any[]>;
  customid = this.makeid(20);

  constructor(private router: Router,firestore: AngularFirestore, private adminService: AdminService) { 
    this.products = firestore.collection('Product', ref => ref.orderBy('price')).valueChanges();
    this.orders = firestore.collection('Orders',ref => ref.orderBy('price')).valueChanges();
  }

  ngOnInit(): void {
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

  deleteOrder(id:string){
    this.adminService.deleteOrder(id);
  }
  deleteProduct(id:string){
    this.adminService.deleteProduct(id);
  }

  updateProduct(id:string){
    localStorage.setItem('ID',id)
    let usedID = localStorage.getItem('ID')
    this.router.navigateByUrl('/updateProduct');
  }
  
  onSubmit(){
    const product: Product = {
      id: this.customid,
      Img_url: this.newProductForm.get('Img_url')?.value,
      Name: this.newProductForm.get('Name')?.value,
      availablePieces: this.newProductForm.get('availablePieces')?.value,
      price: this.newProductForm.get('price')?.value,
      type: this.newProductForm.get('type')?.value
    }
    this.adminService.createProduct(product);

  }
}
