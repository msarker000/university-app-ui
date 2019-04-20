import React, {Component} from 'react';
import './App.css';

import AuthService from './services/AuthService';
import withAuth from './components/withAuth';
import APPLLO_CLIENT from './services/ApolloClientService'
import * as query from './constants/index.js'
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./components/Home";
import Stuff from "./components/Stuff";
import Contact from "./components/Contact";
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {

    constructor(props) {
        super(props);
        this.Auth = new AuthService();

        APPLLO_CLIENT
            .query({
                query: query.ALL_USERS
            })
            .then(result => console.log(result));

    }


    handleLogout(){
        this.Auth.logout();
        this.props.history.replace('/login');
    }


    render() {
        return (
            <Router>
                <div>
                    <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/stuff">Stuff</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/stuff" component={Stuff}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </div>
            </Router>
        );
    }

}

export default withAuth(App);
