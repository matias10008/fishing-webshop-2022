import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReelsRoutingModule } from './reels-routing.module';
import { ReelsComponent } from './reels.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../../environments/environment';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ReelsComponent],
  imports: [
    CommonModule,
    ReelsRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatButtonModule
  ]
})
export class ReelsModule { }
