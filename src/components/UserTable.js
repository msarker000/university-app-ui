import React, { Component } from "react";
import Table from 'react-bootstrap/Table'
import  {Link} from 'react-router-dom'

class UserTable extends Component {

    constructor(props) {
        super(props);
        console.log("UserTable", props);
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
                {this.props.users.length  ? (
                    this.props.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>{user.active? 'Active': 'Disabled'}</td>
                            <td>
                                <Link to={`/users/${user.id}`}>edit</Link>
                                &nbsp;&nbsp;&nbsp;
                                <Link to="/users"
                                    onClick={() => this.props.parent.deleteUser(user)}
                                >
                                    Delete
                                </Link>
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

export default UserTable;