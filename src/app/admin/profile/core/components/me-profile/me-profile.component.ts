import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupOptionComponent } from '../popup-option/popup-option.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';
import { UserI } from '../../../../../models/user.model';
import { PopupAvatarComponent } from '../popup-avatar/popup-avatar.component';

@Component({
  selector: 'app-me-profile',
  templateUrl: './me-profile.component.html',
  styleUrls: ['./me-profile.component.scss']
})
export class MeProfileComponent implements OnInit, OnDestroy {
  userSubscription: Subscription = null;
  userProfile: UserI = null;
  @Input('user') user: UserI;
  constructor(public dialogOption: MatDialog, public store: Store<AppState>, public dialogAvatar: MatDialog) { }

  ngOnInit(): void {
    this.userSubscription = this.store.select('auth').subscribe(({ user }) => {
      console.log(user);
      this.userProfile = user
    });
  }
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  openDialogOption(): void {
    //el cambio de estilo colocarlo en styles.scss si lo colocas en este mismo componente no reconoce los estilos
    const dialogRef = this.dialogOption.open(PopupOptionComponent, {
      width: '250px',
      panelClass: 'app-full-bleed-dialog',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The popupOption settings was closed');
    });
  }

  openDialogAvatar() {
    if(this.userProfile.username!==this.user.username){
      return null;
    }
    const dialogRef = this.dialogAvatar.open(PopupAvatarComponent, {
      width: '600px',
      height:'auto',
      data: this.userProfile,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The popupAvatar settings was closed');
    });
  }



  follow() {
    console.log('seguir');
  }
  unFollow() {
    console.log('dejar de seguir');
  }
}

