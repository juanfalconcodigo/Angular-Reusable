import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {SharedModule as AppSharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    AppSharedModule
  ],
  exports:[
    LoginFormComponent
  ]
})
export class CoreModule { }
