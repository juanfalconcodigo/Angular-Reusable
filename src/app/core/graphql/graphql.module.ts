import { NgModule } from '@angular/core';
import {APOLLO_OPTIONS } from "apollo-angular";
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';

@NgModule({
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: "http://localhost:4004/"
        })
      }
    },
    deps: [HttpLink]
  }],
})
export class GraphqlModule {}