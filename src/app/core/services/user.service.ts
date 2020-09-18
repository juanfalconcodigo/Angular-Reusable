import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { pluck } from 'rxjs/operators';
import { QUERY_SEARCH_USER } from '../operations/query';

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
}
