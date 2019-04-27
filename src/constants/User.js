import gql from 'graphql-tag'


export const ALL_USERS = gql`query {
                        users {
                               id name email role
                            }
                        }
                `;

export const  UPDATE_USER =gql`mutation updateUser($id: ID!, $user: UserInput) {
         updateUser(id: $id, user: $UserInput) {
           id email name role
          }
        }
      `;

export const  CREATE_USER =gql`mutation createUser(user:UserInput) {
         createUser(name: $name, email: $email, role: $role) {
           id email name role
          }
        }
      `;