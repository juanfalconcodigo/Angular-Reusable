import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from './services/services.module';
import { GraphqlModule } from './graphql/graphql.module';



@NgModule({
  imports: [
    CommonModule,
    ServicesModule,
    GraphqlModule
  ],
})
export class CoreModule { }
