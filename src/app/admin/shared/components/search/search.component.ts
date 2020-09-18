import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { setSearch } from '../../../store/admin.actions';
import { asyncScheduler } from 'rxjs';
import { tap, throttleTime } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../../../core/services/user.service';
export interface State {
  flag: string;
  name: string;
  population: string;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  forma: FormGroup;
  users:Observable<any>;
  constructor(private store: Store<AppState>, private router: Router, public _userService: UserService) {

    this.forma = new FormGroup({
      search: new FormControl('')
    });

    this.forma.controls['search'].valueChanges.pipe(throttleTime(3000, asyncScheduler, {
      leading: true,
      trailing: true
    }),
    tap((value)=>{
      console.log('store', value);
    })).subscribe((data) => {
      this.store.dispatch(setSearch({ search: data }));
      this.users=this._userService.queryUserSearch(data);
      /* this.router.navigate(['admin']); */
    });
  }

  clearInput() {
    this.forma.controls['search'].setValue('');
  }


  ngOnInit(): void {


  }

  ngOnDestroy() {
  }

}
