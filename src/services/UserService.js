import APPLLO_CLIENT from './ApolloClientService'
import * as query from '../constants/index.js'

export default class UserService {

    getUsers = () => {
        return APPLLO_CLIENT
            .query({
                query: query.ALL_USERS
            });

    }

    deleteUser = (id) => {
        return APPLLO_CLIENT
            .query({
                query: query.ALL_USERS
            });

    }

    createUser = (name, email, role, active) =>{
       return APPLLO_CLIENT.mutate({
            mutation: query.CREATE_USER,
            variables: {}
       }
        );
    }
}