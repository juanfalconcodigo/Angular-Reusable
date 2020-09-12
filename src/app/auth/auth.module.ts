import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ViewsModule as AuthViewsModule} from './views/views.module';


@NgModule({
  imports: [
    CommonModule,
    AuthViewsModule
  ]
})
export class AuthModule { }
