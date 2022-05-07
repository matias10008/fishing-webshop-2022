import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AdminService } from 'src/app/shared/services/admin.service';
import { Product } from 'src/app/shared/models/Product';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  updateForm = new FormGroup({
    id: new FormControl(''),
    Img_url: new FormControl(''),
    Name: new FormControl(''),
    availablePieces: new FormControl(''),
    price: new FormControl(''),
    type: new FormControl('')
  });
  collectionName = 'Product';
  productid= localStorage.getItem('ID');
  products: Observable<any[]>;
  
  constructor(private location: Location,private afs: AngularFirestore, private adminservice: AdminService) {
    this.products = this.getProductById(this.productid);
  }
  
  ngOnInit(): void {
  }
  
  getProductById(productid:string | null){
    return this.afs.collection<Product>(this.collectionName, ref => ref.where('id', '==', productid)).valueChanges();
  }

  update(product: Product) {
    return this.afs.collection<Product>(this.collectionName).doc(product.id).set(product);
  }
  
  onSubmit(){
    const product: Product = {
      id: this.updateForm.get('id')?.value,
      Img_url:this.updateForm.get('Img_url')?.value,
      Name: this.updateForm.get('Name')?.value,
      availablePieces: this.updateForm.get('availablePieces')?.value,
      price: this.updateForm.get('price')?.value,
      type: this.updateForm.get('type')?.value,
    }
    this.adminservice.updateProduct(product)
    this.location.back()
  }

  goBack(){
    this.location.back();
  }
}
