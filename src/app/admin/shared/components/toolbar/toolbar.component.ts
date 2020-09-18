import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { UserI } from '../../../../models/user.model';
import {MatDialog} from '@angular/material/dialog';
import { PopupUploadComponent } from '../popup-upload/popup-upload.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit,OnDestroy {
  @Input('snav')  snav:any;
  userProfile:UserI=null;
  avatarSubscription:Subscription=null;
  constructor(public store:Store<AppState>,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.avatarSubscription=this.store.select('auth').subscribe(({user})=>{
      this.userProfile=user
    })
  }

  ngOnDestroy(){
    this.avatarSubscription.unsubscribe();
  }

  snavToggle(){
    this.snav.toggle();
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(PopupUploadComponent, {
      width: '250px',
      data: {username: this.userProfile.username}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Closed popup-upload');
    });
  }

}
