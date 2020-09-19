import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [{
  path:'',
  component:AdminComponent,
  children:[
    {
      path:'list',
      loadChildren:()=>import('./country/country.module').then(m=>m.CountryModule)
    },
    {
      path:'profile/:username',
      loadChildren:()=>import('./profile/profile.module').then((m)=>m.ProfileModule)
    },
    {
      path:'**',
      pathMatch:'full',
      redirectTo:'list'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
