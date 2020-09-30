import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from './services/services.module';
import { GraphqlModule } from './graphql/graphql.module';
import { GuardsModule } from './guards/guards.module';



@NgModule({
  imports: [
    CommonModule,
    ServicesModule,
    GraphqlModule,
    GuardsModule
  ]
})
export class CoreModule { }
