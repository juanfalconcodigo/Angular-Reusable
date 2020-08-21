import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { CountryViewComponent } from './country-view/country-view.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CountryViewComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ]
})
export class ViewsModule { }
