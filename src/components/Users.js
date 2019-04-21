import React, { Component } from "react"
import  UserService from "../services/UserService"
import Table from 'react-bootstrap/Table'
import  {Link} from 'react-router-dom'

class Users extends Component {

    constructor(props) {
        super(props);
        this.userService = new UserService();

        this.state = {
            resolvedSuccess: false,
            users: [],
        };
    }

    deleteUser = (user) =>{
        console.log(user.id);
    }

    editUser = (user) => {
        console.log(user.id);
    }


    componentDidMount() {
        this.userService.getUsers().then(res =>{
            console.log(res)
            this.setState({ resolvedSuccess: true, users: res.data.users})
        }).catch(error => this.setState({ resolvedSuccess: false, users: []}));
    }

    render() {
        return (
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {this.state.resolvedSuccess  ? (
                    this.state.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>{user.active? 'Active': 'Disabled'}</td>
                            <td>
                                <Link to={`/users/${user.id}`}>edit</Link>
                                <button
                                    onClick={() => {
                                        this.deleteUser(user);
                                    }}
                                    className="button muted-button"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => this.editUser(user)}
                                    className="button muted-button"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>No users</td>
                    </tr>
                )}
                </tbody>
            </Table>
        );
    }


}

export default Users;