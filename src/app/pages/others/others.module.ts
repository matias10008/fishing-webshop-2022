import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OthersRoutingModule } from './others-routing.module';
import { OthersComponent } from './others.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../../environments/environment';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [OthersComponent],
  imports: [
    CommonModule,
    OthersRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatButtonModule
  ]
})
export class OthersModule { }
