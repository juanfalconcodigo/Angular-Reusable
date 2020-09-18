import { gql } from 'apollo-angular';

const QUERY_ME_PUBLICATION = gql`
query getPublications($username: String!) {
  getPublications(username: $username) {
    id
    idUser
    file
    typeFile
    createdAt
  }
}
`;

const QUERY_SEARCH_USER=gql`
query search($search: String) {
  search(search: $search) {
    id
    name
    username
    avatar
  }
}
`;

export {
    QUERY_ME_PUBLICATION,
    QUERY_SEARCH_USER
}