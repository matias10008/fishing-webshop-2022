import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReelsComponent } from './reels.component';

const routes: Routes = [
  { path: '', component: ReelsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReelsRoutingModule { }
