import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SharedModule as AppSharedModule } from '../../shared/shared.module';
import { SearchComponent } from './components/search/search.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SidenavComponent, ToolbarComponent, SearchComponent],
  imports: [
    CommonModule,
    AppSharedModule,
    RouterModule
  ],
  exports: [
    AppSharedModule,
    SidenavComponent,
    ToolbarComponent,
    SearchComponent
  ]
})
export class SharedModule { }
