import gql from 'graphql-tag'


export const ALL_USERS = gql`query {
                        users {
                               id name email role
                            }
                        }
                `;


export const  UPDATE_USER =gql`mutation updateUser($name: String!, $email: String!,  $role: Role!) {
         updateUser(name: $name, email: $email, role: $role) {
           id email name role
          }
        }
      `;

export const  CREATE_USER =gql`mutation createUser($name: String!, $email: String!,  $role: Role!) {
         createUser(name: $name, email: $email, role: $role) {
           id email name role
          }
        }
      `;