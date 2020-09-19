import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { pluck } from 'rxjs/operators';
import { QUERY_GET_USER, QUERY_SEARCH_USER } from '../operations/query';
import { Observable } from 'rxjs';
import { UserI } from 'src/app/models/user.model';

@Injectable()
export class UserService {

  constructor(private apollo: Apollo) { }

  queryUserSearch(search: string) {
    return this.apollo.watchQuery({
      query: QUERY_SEARCH_USER,
      variables: {
        search
      },
      fetchPolicy: 'network-only'
    }).valueChanges.pipe(pluck('data','search'));
  }
  queryGetUser(username:string):Observable<UserI>{
    return this.apollo.watchQuery({
      query:QUERY_GET_USER,
      variables:{
        username
      },
      fetchPolicy:'network-only'
    }).valueChanges.pipe(pluck('data','getUser'));
  }
}
