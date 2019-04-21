import React, {Component} from 'react';
import './App.css';

import AuthService from './services/AuthService';
import withAuth from './components/withAuth';
import {
    Route,
} from "react-router-dom";
import Home from "./components/Home";
import Stuff from "./components/Stuff";
import Contact from "./components/Contact";
import {BrowserRouter as Router} from 'react-router-dom';
import {Container, Navbar} from 'react-bootstrap';
import  {Link} from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Users from './components/Users'
import UserEdit from './components/UserEdit'


class App extends Component {

    constructor(props) {
        super(props);
        this.Auth = new AuthService();
        this.loginuser = this.Auth.getLoginUser();
    }

    handleLogout() {
        this.Auth.logout();
        this.props.history.replace('/login');
    }

    render() {
        return (
            <Router>
                <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Brand href="/">{this.loginuser.user.role} Dashboard</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">{this.loginuser.user.name}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
                <Container fluid>
                    <Row style={{marginTop: '8px'}}>
                        <Col sm={2}>
                            <div style={{display: 'flex'}}>
                                <div style={{
                                    padding: '10px',
                                    width: '100%',
                                    background: '#f0f0f0'
                                }}>
                                    <ul style={{listStyleType: 'none', padding: 0}}>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/stuff">stuff</Link></li>
                                        <li><Link to="/contact">contact</Link></li>
                                        <li><Link to="/users">Users</Link></li>
                                    </ul>

                                    <ul style={{listStyleType: 'none', padding: 0}}>
                                        <li><Link to="" onClick={this.handleLogout.bind(this)}>Logout</Link></li>
                                    </ul>

                                </div>
                            </div>
                        </Col>

                        <Col sm={10}>
                            <div className="content">
                                <Route exact path="/" component={Home}/>
                                <Route path="/stuff" component={Stuff}/>
                                <Route path="/contact" component={Contact}/>
                                <Route path="/users" component={Users}/>
                                <Route path="/users/:id" component={UserEdit}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Router>
        );
    }
}

export default withAuth(App);
