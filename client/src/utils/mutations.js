import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_DEV_USER = gql`
mutation updateDevUser($position: DevDetails){
  updateDevUser(position: $position) {
    _id
    username
    email
    position {
      preferredRole
      language
      length
      commitment
      startDate
    }
  }
}
`