import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RodsRoutingModule } from './rods-routing.module';
import { RodsComponent } from './rods.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../../environments/environment';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [RodsComponent],
  imports: [
    CommonModule,
    RodsRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatButtonModule
  ]
})
export class RodsModule { }
