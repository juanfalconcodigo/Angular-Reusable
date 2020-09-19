import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { setSearch } from '../../../store/admin.actions';
import { asyncScheduler, Subscription } from 'rxjs';
import { tap, throttleTime } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../../../core/services/user.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  forma: FormGroup;
  users: Observable<any>;
  @ViewChild("myInput", { static: false }) myInput: ElementRef;
  @ViewChild("device", { static: false }) device: ElementRef;
  styleSubscription:Subscription=null;

  constructor(private store: Store<AppState>, private router: Router, public _userService: UserService) {

    this.forma = new FormGroup({
      search: new FormControl('')
    });

    this.forma.controls['search'].valueChanges.pipe(throttleTime(3000, asyncScheduler, {
      leading: true,
      trailing: true
    }),
      tap((value) => {
        console.log('store', value);
      })).subscribe((data) => {
        this.store.dispatch(setSearch({ search: data }));
        this.users = this._userService.queryUserSearch(data);
      });
  }

  clearInput() {
    this.forma.controls['search'].setValue('');
  }

  getRouteUser(username) {
    this.router.navigate(['admin/profile', username]);
  }


  ngOnInit(): void {


  }

  ngAfterViewInit() {
    this.styleSubscription=fromEvent(document, 'click').subscribe((e) => {
      if (this.myInput.nativeElement.contains(e.target)) {
        /* console.log('esta dentro'); */
        this.device.nativeElement.classList.add('cell-device');
      } else {
        /* console.log('esta fuera'); */
        this.device.nativeElement.classList.remove('cell-device');
      }
    });
  }

  ngOnDestroy() {
    this.styleSubscription.unsubscribe();
  }


}
