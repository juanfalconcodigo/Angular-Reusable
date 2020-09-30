import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SharedModule as AppSharedModule } from '../../shared/shared.module';
import { SearchComponent } from './components/search/search.component';
import { RouterModule } from '@angular/router';
import { PopupUploadComponent } from './components/popup-upload/popup-upload.component';
import { EditorFabricComponent } from './components/editor-fabric/editor-fabric.component';


@NgModule({
  declarations: [SidenavComponent, ToolbarComponent, SearchComponent, PopupUploadComponent, EditorFabricComponent],
  imports: [
    CommonModule,
    AppSharedModule,
    RouterModule
  ],
  exports: [
    AppSharedModule,
    SidenavComponent,
    ToolbarComponent,
    EditorFabricComponent
  ]
})
export class SharedModule { }
