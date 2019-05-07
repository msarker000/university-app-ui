import React, { Component } from "react";
import {
    Form, Button
} from 'react-bootstrap'

import  instanceAssignmentService from "../services/AssignmentService"

class AddAssignments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: this.props.match.params.id,
            title:''
        };

        this.assignmentService = instanceAssignmentService
    }


    onFormSubmit = event => {
        event.preventDefault();

        console.log(this.state.courseId, this.state.title, event.target.title.value);

      this.assignmentService.createAssigment(this.state.courseId, event.target.title.value).then(res =>{
          console.log("created successfully..")
        }).catch(error => console.log('error in creating course'));

        this.setState({
            courseId:-1,
            title: ''

        });

    };

    render() {
            return (
                <Form onSubmit={this.onFormSubmit}>

                    <Form.Group controlId="formBasicTitle">
                        <Form.Label> Assignment Title</Form.Label>
                        <Form.Control type="text" name="title" placeholder="Enter title"  />
                    </Form.Group>
                    <br />
                    <br />
                    <Button variant="outline-primary" type="submit">
                        Save
                    </Button>
                    <hr />
                </Form>
            );
        }
}

export default AddAssignments;