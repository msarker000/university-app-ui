import React, { Component } from "react";
import  instanceUserService from "../services/UserService"

class EditUser extends Component {

    constructor(props) {
        super(props);

        this.userService = instanceUserService;

        this.state = {
            name: this.userService.getCurrentUser().name,
            email: this.userService.getCurrentUser().email,
            role: this.userService.getCurrentUser().role,
            active: false
        };
    }



    componentDidMount() {

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
        this.userService.updateUser(this.state.name, this.state.email, this.state.role, this.state.active).then(res =>{
            this.props.history.push('/users');
        }).catch(error => console.log('error in updateing user'));
        this.props.history.push('/users');
    };

    render(){
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
                <input type="submit" value="Save" />
                <hr />
            </form>
        );
    }
}

export default EditUser;