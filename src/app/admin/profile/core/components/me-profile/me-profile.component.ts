import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupOptionComponent } from '../popup-option/popup-option.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';
import { UserI } from '../../../../../models/user.model';

@Component({
  selector: 'app-me-profile',
  templateUrl: './me-profile.component.html',
  styleUrls: ['./me-profile.component.scss']
})
export class MeProfileComponent implements OnInit, OnDestroy {
  userSubscription: Subscription = null;
  userProfile: UserI = null;
  @Input('user') user: UserI;
  constructor(public dialog: MatDialog, public store: Store<AppState>) { }

  ngOnInit(): void {
    this.userSubscription = this.store.select('auth').subscribe(({ user }) => {
      console.log(user);
      this.userProfile = user
    });
  }
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  openDialog(): void {
    //el cambio de estilo colocarlo en styles.scss si lo colocas en este mismo componente no reconoce los estilos
    const dialogRef = this.dialog.open(PopupOptionComponent, {
      width: '250px',
      panelClass: 'app-full-bleed-dialog',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The popup settings was closed');
    });
  }

  follow() {
    console.log('seguir');
  }
  unFollow() {
    console.log('dejar de seguir');
  }
}

