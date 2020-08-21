import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryViewComponent } from './country-view/country-view.component';

const routes: Routes = [{
  path:'',
  component:CountryViewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
