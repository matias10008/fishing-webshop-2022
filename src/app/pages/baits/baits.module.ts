import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaitsRoutingModule } from './baits-routing.module';
import { BaitsComponent } from './baits.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../../environments/environment';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [BaitsComponent],
  imports: [
    CommonModule,
    BaitsRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatButtonModule
  ]
})
export class BaitsModule { }
