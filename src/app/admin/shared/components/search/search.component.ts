import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from 'src/app/app.reducer';
import { setSearch } from '../../../store/admin.actions';
import { asyncScheduler } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  forma:FormGroup;
  constructor(private store:Store<AppState>) {
    
    this.forma=new FormGroup({
      search:new FormControl('')
    });

    this.forma.controls['search'].valueChanges.pipe(throttleTime(2000,asyncScheduler,{
      leading:true,
      trailing:true
    })).subscribe((data)=>{
      this.store.dispatch(setSearch({search:data}));
    });
    /* this.forma.controls['search'].valueChanges.subscribe((data)=>{
      this.store.dispatch(setSearch({search:data}));
    }); */
   }

   clearInput(){
    this.forma.controls['search'].setValue('');

   }


  ngOnInit(): void {

    
  }

  searchCountry(){
    console.log("Buscando...")
  }

}
