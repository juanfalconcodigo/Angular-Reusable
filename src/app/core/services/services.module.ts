import { NgModule } from '@angular/core';
import { CountryService } from './country.service';
import { AuthService } from './auth.service';



@NgModule({
  providers:[
    CountryService,
    AuthService
  ]
})
export class ServicesModule { }
