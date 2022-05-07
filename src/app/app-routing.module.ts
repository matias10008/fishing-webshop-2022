import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  {
    path:'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule),
    canActivate: [AuthGuard]
 },
  {
     path:'baits',
     loadChildren: () => import('./pages/baits/baits.module').then(m => m.BaitsModule),
     canActivate: [AuthGuard]
  },
  {
    path:'reels',
    loadChildren: () => import('./pages/reels/reels.module').then(m => m.ReelsModule),
    canActivate: [AuthGuard]
 },
 {
    path:'rods',
    loadChildren: () => import('./pages/rods/rods.module').then(m => m.RodsModule),
    canActivate: [AuthGuard]
},
{
    path:'others',
    loadChildren: () => import('./pages/others/others.module').then(m => m.OthersModule),
    canActivate: [AuthGuard]
},
{ 
    path: 'notfound', 
    loadChildren: () => import('./pages/notfound/notfound.module').then(m => m.NotfoundModule)
},
 { 
   path: 'login', 
   loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
},
{ 
  path: 'signup', 
  loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) 
}, 
{ 
  path: 'admin', 
  loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
  canActivate: [AuthGuard] 
},  
{ 
  path: 'cart', 
  loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule),
  canActivate: [AuthGuard] 
},
{ 
  path: 'updateProduct',
  loadChildren: () => import('./pages/update-product/update-product.module').then(m => m.UpdateProductModule), 
  canActivate: [AuthGuard]
},
{
  path: '',
  redirectTo:'/login',
  pathMatch:'full'
},
  
  
{
  path: '**',
  redirectTo: '/notfound'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
