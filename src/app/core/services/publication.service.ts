import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { pluck } from 'rxjs/operators';
import { UPLOAD_PUBLICATION } from '../operations/mutation';
import { QUERY_ME_PUBLICATION } from '../operations/query';
import { Observable } from 'rxjs';

@Injectable()
export class PublicationService {

  constructor(private apollo: Apollo) { }

  queryPublicationUsername(username: string) {
    return this.apollo.watchQuery({
      query: QUERY_ME_PUBLICATION,
      variables: {
        username
      },
      fetchPolicy: 'network-only'
    }).valueChanges.pipe(pluck('data','getPublications'));
  }

  mutationUploadPublication(file:File):Observable<{ status: boolean, urlPublish: string }>{
    return this.apollo.mutate({
      mutation:UPLOAD_PUBLICATION,
      variables:{
        file
      },
      context: {
        useMultipart: true,
      }
    }).pipe(pluck('data','publish'))
  }
}
