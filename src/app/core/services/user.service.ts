import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { pluck } from 'rxjs/operators';
import { QUERY_GET_USER, QUERY_SEARCH_USER } from '../operations/query';
import { Observable } from 'rxjs';
import { UserI } from 'src/app/models/user.model';
import { UPDATE_AVATAR } from '../operations/mutation';
import { ApolloCache } from '@apollo/client/core';
import { getUser } from '../../auth/store/auth.actions';

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
    }).valueChanges.pipe(pluck('data', 'search'));
  }
  queryGetUser(username: string): Observable<UserI> {
    return this.apollo.watchQuery({
      query: QUERY_GET_USER,
      variables: {
        username
      },
      fetchPolicy: 'network-only'
    }).valueChanges.pipe(pluck('data', 'getUser'));
  }

  mutationUpdateAvatar(file: File, username: string): Observable<any> {
    return this.apollo.mutate({
      mutation: UPDATE_AVATAR,
      variables: {
        file
      },
      context: {
        useMultipart: true,
      },
      update: (store: ApolloCache<any>, { data: { updateAvatar } }: { data: any }) => {
        const {getUser} = store.readQuery({ query: QUERY_GET_USER ,variables:{username}});
        let hack='?'+new Date().getTime()
        const newData = { ...getUser, avatar: updateAvatar.urlAvatar+hack,description:'gaaaa' };
        store.writeQuery({
          query: QUERY_GET_USER,
          variables: { username },
          data:{
            getUser:{
              ...newData
            }
          }
        });
      }
    })
  }
}
