import decode from 'jwt-decode';
import gql from 'graphql-tag';
import APPLLO_CLIENT from './ApolloClientService'
import * as query from '../constants/index.js'


export const AUTHENTICATE_USER = gql`mutation loginUser($email: String!, $password: String!) {
                       loginUser(email: $email, password: $password){
                          token user{
                                name role id
                            }
                         }
                      }
                `;

export default class AuthService {
    // Initializing important variables
    constructor() {
        this.login = this.login.bind(this)
        this.getProfile = this.getProfile.bind(this)




    }

    login(email, password) {

        /*return APPLLO_CLIENT
            .mutate({
                mutation: gql`
            mutation{
                loginUser(email:"++",password:"password"){
                  token user{
                       name role id
                     }
                 }
            }
            `,
            })
            .then(result => {
                this.setToken(result.data); // Setting the token in localStorage
                return Promise.resolve(result);
            });*/

        console.log(email, password);

        return APPLLO_CLIENT.mutate({
            mutation: query.AUTHENTICATE_USER,
            variables: {
                email:email,
                password: password
            }}
            ).then(result => {
            this.setToken(result.data); // Setting the token in localStorage
            return Promise.resolve(result);
        });


    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken();// GEtting token from localstorage
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    }

    setToken(loginData) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', loginData.loginUser.token)
        localStorage.setItem('login_user', loginData)

    }

    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }

    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('login_user')
    }

    getProfile() {
        // Using jwt-decode npm package to decode the token
        return decode(this.getToken());
    }
}
