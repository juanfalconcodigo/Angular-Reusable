import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { MUTATION_LOGIN } from '../operations/mutation';
import {LoginInputI} from '../interfaces/inputUser';
@Injectable()
export class AuthService {

  constructor(private apollo: Apollo) { }

  mutationLogin(input: LoginInputI) {
    return this.apollo.mutate({
      mutation: MUTATION_LOGIN,
      variables: {
        input
      }
    })
  }
}
