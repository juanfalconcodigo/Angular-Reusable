import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {path:'auth',loadChildren:()=>import('./auth/auth.module').then((m)=>m.AuthModule)},
  {path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule),canActivate:[AuthGuard],canLoad:[AuthGuard]},
  {path:'**',pathMatch:'full',redirectTo:'auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
