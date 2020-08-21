import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path:'auth',component:AuthComponent},
  {path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
