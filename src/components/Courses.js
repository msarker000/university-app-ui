import React, {Component} from "react"
import  instanceCourseService from "../services/CourseService"
import  {Link} from 'react-router-dom'
import  CourseTable from './CourseTable'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Courses extends Component {

    constructor(props) {
        super(props);
        this.courseService = instanceCourseService;

    }

    deleteCourse = (course) => {
        console.log('deleteCourse', course);
        this.courseService.deleteCourse(course.id)
    }

    editCourse = (course) => {
        console.log("editCourse", course);
        this.courseService.setCurrentCourse(course);
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col><CourseTable parent={this}></CourseTable> </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to={`/courses/add/new`}>Add new user</Link>
                    </Col>
                </Row>

            </React.Fragment>

        );
    }
}


export default Courses;