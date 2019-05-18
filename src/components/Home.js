import React, { Component } from "react";
import StudentHome from './StudentHome'
import  FacultyHome from './FacultyHome'
import instanceAuthService from '../services/AuthService'

class Home extends Component {
    constructor(props) {
        super(props);
        this.Auth = instanceAuthService;
        this.loginuser = this.Auth.getLoginUser();
        console.log(this.loginuser.user.role)
    }
    render() {
        if(this.loginuser.user.role === 'Faculty'){
            return (
                <div className="content">
                    <FacultyHome/>
                </div>

            );
        }
        else if(this.loginuser.user.role === 'Admin'){
            return (
                <div className="content">
                    <StudentHome/>
                </div>

            );
        }else{
            return (
                <div className="content">
                    <StudentHome/>
                </div>

            );
        }



    }
}

export default Home;