import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {
  userSubscription: Subscription = null;
  username: string;
  constructor(public _authService: AuthService, public store: Store<AppState>) { }

  ngOnInit(): void {
    this.userSubscription = this.store.select('auth').pipe(pluck('user')).subscribe((resp:any) => {
      if (resp) {
        console.log('sidenav', resp.username);
        this.username = resp.username;
      }
    })
  }

  logout() {
    this._authService.logout()
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
    console.log('se destruyo')
  }

}
