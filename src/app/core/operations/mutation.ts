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


const UPLOAD_PUBLICATION=gql`
mutation uploadPublish($file:Upload){
  publish(file:$file){
    status
    urlPublish
  }
}
`;

export {
  MUTATION_LOGIN,
  UPLOAD_PUBLICATION
}