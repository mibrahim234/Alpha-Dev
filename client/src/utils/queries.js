import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
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
`;

export const QUERY_ME = gql`
  {
    me {
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
`;


// week 18 activity 2