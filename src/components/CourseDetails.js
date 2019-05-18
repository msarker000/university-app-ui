import React, { Component } from "react";
import  instanceCourseService from "../services/CourseService"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import  {Link} from 'react-router-dom'
import  AssignmentTable from './AssignmentTable'
import  CourseStudentTable from './CourseStudentTable'

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
                <h5>Course Details</h5>
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
                            <br/>
                            <Link to={`/courses/${this.state.currentCourse.id}/assignment/grade`}>Assign grade</Link>
                        </Col>
                    </Row>
                </React.Fragment>
                <hr/>
                <h5>Assignment List</h5>
                <AssignmentTable  course={this.state.currentCourse}  />
                <hr/>
                <h5>Student List</h5>
                <CourseStudentTable students={this.state.currentCourse.students}/>

            </div>
        );
    }
}

export default CourseDetails;