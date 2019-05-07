import APPLLO_CLIENT from './ApolloClientService'
import * as query from '../constants/index.js'

class UserService {
    static _instance = null;
    _currentUser= null;

    static getInstance() {
        if (UserService._instance == null) {
            UserService._instance = new UserService();
        }

        return this._instance;
    }

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
            variables: {
                name:name,
                email:email,
                role: role,
                active: active
            }}
        );
    }


    updateUser = (name, email, role, active) =>{
        return APPLLO_CLIENT.mutate({
            mutation: query.UPDATE_USER,
            variables: {
                name:name,
                email:email,
                role: role,
                active: active
            }}
        );
    }

    setCurrentUser = (_user) =>{
        this._currentUser = _user;
        console.log('userServie:', this._currentUser)
    }

    getCurrentUser =() =>{
        return this._currentUser;
    }


    getStudents = () => {
        return APPLLO_CLIENT
            .query({
                query: query.ALL_STUDENTS
            });

    }

}

const instanceUserService = UserService.getInstance();
export default instanceUserService;