import { NgModule } from '@angular/core';
import { CountryService } from './country.service';
import { AuthService } from './auth.service';
import { PublicationService } from './publication.service';
import { UserService } from './user.service';



@NgModule({
  providers:[
    CountryService,
    AuthService,
    PublicationService,
    UserService
  ]
})
export class ServicesModule { }
