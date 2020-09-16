import { NgModule } from '@angular/core';
import {APOLLO_OPTIONS } from "apollo-angular";
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';
import { environment } from '../../../environments/environment.prod';
@NgModule({
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: environment.backendUrlGraphql
        })
      }
    },
    deps: [HttpLink]
  }],
})
export class GraphqlModule {}