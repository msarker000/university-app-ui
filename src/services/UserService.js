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
}