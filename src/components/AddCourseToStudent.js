import React, { Component } from "react";
import  instanceCourseService from "../services/CourseService"
import  instanceUserService from "../services/UserService"

class AddCourseToStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected_student_id: -1,
            selected_course_id:-1,
            students:[],
            courses:[]
        };
        this.userService = instanceUserService;
        this.courseService = instanceCourseService;
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    handleStudentChange = event => {
        this.setState({selected_student_id: event.target.value});
    };


    handleCourseChange = event => {
        this.setState({selected_course_id: event.target.value});
    };

    componentDidMount() {
        this.userService.getStudents().then(res =>{
            this.setState({students: res.data.students})
        }).catch(error => this.setState({students: []}));


        this.courseService.getCourses().then(res =>{
            console.log(res.data);
            this.setState({courses: res.data.courses})
        }).catch(error => this.setState({courses: []}));
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.courseService.addCourseToStudent(this.state.selected_student_id,this.state.selected_course_id).then(res => {
            console.log("added successfully.")
        }).catch(error => console.log('error in create course'));

        this.setState({
            selected_student_id: -1,
            selected_course_id:-1,
            students:[],
            courses:[]
        });

    };


    render()  {
        return (
            <form onSubmit={this.onFormSubmit}>
                <label>
                    Student:
                </label>

                <select value={this.state.selected_student_id} onChange={this.handleStudentChange}>
                    <option value="-1">Select Student</option>
                    {
                        this.state.students.map(student => (
                            <option key={student.id} value={student.id}>{student.name}</option>
                        ))
                    }
                </select>

                <br />
                <label>
                    Course:
                </label>

                <select value={this.state.selected_course_id} onChange={this.handleCourseChange}>
                    <option value="-1">Select Course</option>
                    {
                        this.state.courses.map(course => (
                            <option key={course.id} value={course.id}>{course.name}</option>
                        ))
                    }
                </select>
                <br />
                <br />
                <input type="submit" value="Add" />
                <hr />
            </form>
        );
    }
}

export default AddCourseToStudent;