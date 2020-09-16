import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { MUTATION_LOGIN } from '../operations/mutation';
import {LoginInputI} from '../interfaces/inputUser';
import * as Cookies from 'js-cookie';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {

  constructor(private apollo: Apollo,public route:Router) { }

  mutationLogin(input: LoginInputI) {
    return this.apollo.mutate({
      mutation: MUTATION_LOGIN,
      variables: {
        input
      }
    })
  }


  logout(){
    Cookies.remove('token');
    this.route.navigate(['auth'])
  }
}
