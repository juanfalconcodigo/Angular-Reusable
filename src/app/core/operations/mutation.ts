import {gql} from 'apollo-angular';

const MUTATION_LOGIN=gql`
mutation postLogin($input:LoginInput!){
  login(input:$input){
    status
    message
    user{
       id
      name
      username
      email
      avatar
      siteWeb
      description
      password
      createdAt
    }
    token
  }
}
`;


export {
  MUTATION_LOGIN
}