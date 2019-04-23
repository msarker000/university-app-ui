import React, { Component } from "react"
import  UserService from "../services/UserService"
import  {Link} from 'react-router-dom'
import  UserTable from './UserTable'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Users extends Component {

    constructor(props) {
        super(props);
        this.userService = new UserService();

        this.state = {
            resolvedSuccess: false,
            users: [],
            editing: false
        };
    }

    deleteUser = (user) =>{
        console.log('deleteUser',user.id);
    }

    editUser = (user) => {
        console.log("editUser", user.id);
        this.setState({
            editing:true
        })
    }


    componentDidMount() {
        this.userService.getUsers().then(res =>{
            console.log(res);
            this.setState({ resolvedSuccess: true, users: res.data.users})
        }).catch(error => this.setState({ resolvedSuccess: false, users: []}));
    }

    render() {
        return (
            <React.Fragment>
        <Row>
            <Col><UserTable users={this.state.users} parent={this}></UserTable> </Col>
        </Row>
                <Row>
                    <Col>
                        <Link to={`/users/add/new`}>Add new user</Link>
                    </Col>
                </Row>

            </React.Fragment>

        );
    }


}

export default Users;