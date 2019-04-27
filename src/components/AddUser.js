import React, { Component } from "react";
import UserService from  '../services/UserService'

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            role:"Student",
            active: false
        };
        this.userService = new UserService();
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    handleRoleChange = event => {
        this.setState({role: event.target.value});
    };

    handleStatusChange = event => {
        this.setState({active:event.target.checked});
    };

    onFormSubmit = event => {
        event.preventDefault();
        console.log(this.state);

        this.setState({
            name: "",
            email: "",
            role:"Student",
            active: false
        });

        this.userService.createUser(this.state.name, this.state.email, this.state.role, this.state.active).then(res =>{
            console.log(res);
        }).catch(error => console.log('error in create user'));

    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <label>
                    First Name:
                </label>

                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                />


                <br />
                <label>
                    Email:
                </label>

                <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                />

                <br />
                <label>
                    Role:
                </label>



                <select value={this.state.role} onChange={this.handleRoleChange}>
                    <option value="Professor">Professor</option>
                    <option value="Student">Student</option>
                </select>

                <br />
                <label>Active</label>

                <input type="checkbox"
                       name="active"
                       value={this.state.active}
                       onChange={this.handleStatusChange}
                />

                <br />
                <br />
                <input type="submit" value="Create User" />
                <hr />
            </form>
        );
    }
}

export default AddUser;