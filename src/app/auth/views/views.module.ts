import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import {ViewsComponent} from './views.component';
import { LoginViewComponent } from './login-view/login-view.component';
import {CoreModule} from '../core/core.module';
@NgModule({
  declarations: [
    ViewsComponent,
    LoginViewComponent,
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    CoreModule
  ]
})
export class ViewsModule { }
