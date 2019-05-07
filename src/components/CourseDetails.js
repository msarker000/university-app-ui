import React, { Component } from "react";
import  instanceCourseService from "../services/CourseService"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import  {Link} from 'react-router-dom'
import  AssignmentTable from './AssignmentTable'

class CourseDetails extends Component {
    constructor(props) {
        super(props);

        this.courseService = instanceCourseService;

        this.state = {
            currentCourse: this.courseService.getCurrentCourse(),
        };
    }
    render() {
        return (
            <div>
                <h2>Course Details</h2>
                <hr/>
                <React.Fragment>
                    <Row>
                        <Col><b> Course Title:</b> </Col>
                        <Col>{this.state.currentCourse.name} </Col>
                    </Row>

                    <Row>
                        <Col><b> Faculty:</b> </Col>
                        <Col>{this.state.currentCourse.professor.name}({this.state.currentCourse.professor.email}) </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Link to={`/courses/${this.state.currentCourse.id}/assignment/new`}>Add new assignment</Link>
                        </Col>
                    </Row>
                </React.Fragment>
                <hr/>
                <AssignmentTable  course={this.state.currentCourse}  />

            </div>
        );
    }
}

export default CourseDetails;