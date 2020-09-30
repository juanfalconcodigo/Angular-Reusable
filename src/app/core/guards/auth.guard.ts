import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import * as Cookie from 'js-cookie';
import jwt_decode from "jwt-decode";
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as moment from 'moment';
import { setAuth } from '../../auth/store/auth.actions';
import { UserService } from '../services/user.service';
import { UserI } from '../../models/user.model';
import { take } from 'rxjs/operators';
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(public _authService: AuthService, public router: Router, public store: Store<AppState>,public _userService:UserService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogging();
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    /* return this.canActivate(childRoute, state); */
    return this.checkLogging();
  }
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkLogging();
  }


  checkLogging(): boolean {
    try {
      const token:string = Cookie.get('token');
      if (token) {
        const { exp,username } = jwt_decode(token);
        console.log(exp);
        if (exp <= moment().unix()) {
          console.log("Token expirado");
          this._authService.logout();
          return false;
        }
        else {
          const subscribe=this._userService.queryGetUser(username).pipe(take(1)).subscribe((user:UserI)=>{
            /* console.log('servicio en el guard',user); */
            //esto genera un comportamiento raro que por ahora no entiendo en el me profile al estar en otra view
            this.store.dispatch(setAuth({ user, token }));
          });
          return true;
        }

      } else {
        console.log('No existe el token');
        this._authService.logout();
        return false;
      }

    } catch (error) {
      console.log(error);
      this._authService.logout();
      return false;
    }
  }


}
