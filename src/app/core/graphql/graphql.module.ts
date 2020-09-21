import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from "apollo-angular";
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, ApolloLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { environment } from '../../../environments/environment.prod';
/* import { environment } from 'src/environments/environment'; */
import * as Cookie from 'js-cookie';


const uri = '/graphql';

export function provideApollo(httpLink: HttpLink) {

  // Get the authentication token from local storage if it exists
  const auth = setContext((operation, { headers }) => {
    const token = Cookie.get('token');
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : ''
      },
    };
  });

  const link = ApolloLink.from([auth, httpLink.create({ uri: environment.backendUrlGraphql })]);
  const cache = new InMemoryCache();
  return {
    link,
    cache
  }
}
@NgModule({
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: provideApollo,
    deps: [HttpLink]
  }],
})
export class GraphqlModule { }