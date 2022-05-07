import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RodsComponent } from './rods.component';

const routes: Routes = [
  { path: '', component: RodsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RodsRoutingModule { }
