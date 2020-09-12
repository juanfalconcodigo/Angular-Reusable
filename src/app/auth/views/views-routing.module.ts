import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginViewComponent } from './login-view/login-view.component';
import { ViewsComponent } from './views.component';

const routes: Routes = [
  {
    path:'',
    component:ViewsComponent,
    children:[
      {
        path:'',
        component:LoginViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
