import { gql } from '@apollo/client';
export const ADD_PROFILE = gql`
mutation AddProfile($firstName: String!, $lastName: String!, $email: String!, $password: String!, $state: String!, $city: String!, $address: String!) {
  addProfile(firstName: $firstName, lastName: $lastName, email: $email, password: $password, state: $state, city: $city, address: $address) {
    token
    user {
      id
      firstName
      lastName
      email
      state
      city
      address
    }
  }
}`;
export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      id
      firstName
      lastName
      email
      state
      city
      address
    }
  }
}`















