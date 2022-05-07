import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaitsComponent } from './baits.component';

const routes: Routes = [
  { path: '', component: BaitsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaitsRoutingModule { }
