import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPublicationComponent } from './components/list-publication/list-publication.component';
import { MeProfileComponent } from './components/me-profile/me-profile.component';
import { SharedModule as AdminSharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [ListPublicationComponent, MeProfileComponent],
  imports: [
    CommonModule,
    AdminSharedModule
  ],
  exports:[
    ListPublicationComponent, MeProfileComponent
  ]
})
export class CoreModule { }
