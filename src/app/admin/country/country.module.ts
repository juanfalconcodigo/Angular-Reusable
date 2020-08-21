import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsModule as CountryViewsModule} from './views/views.module';


@NgModule({
  imports: [
    CountryViewsModule
  ]
})
export class CountryModule { }
