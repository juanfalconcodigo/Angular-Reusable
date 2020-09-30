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

const UPDATE_AVATAR=gql`
mutation updateAvatar($file: Upload) {
  updateAvatar(file: $file) {
    status
    urlAvatar
  }
}
`;
export {
  MUTATION_LOGIN,
  UPLOAD_PUBLICATION,
  UPDATE_AVATAR
}