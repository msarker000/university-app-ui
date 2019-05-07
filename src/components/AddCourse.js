import React, { Component } from "react";
import  instanceCourseService from "../services/CourseService"
import  instanceUserService from "../services/UserService"

class AddCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            facultyID:-1,
            facultys:[]
        };
        this.userService = instanceUserService;
        this.courseService = instanceCourseService;
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    handleFacultyChange = event => {
        this.setState({facultyID: event.target.value});
    };


    componentDidMount() {
        this.userService.getUsers().then(res =>{
            this.setState({facultys: res.data.users.filter(user => user.role === 'Faculty' )})
        }).catch(error => this.setState({facultys: []}));
    }

    onFormSubmit = event => {
        event.preventDefault();

        this.courseService.createCourse(this.state.name,this.state.facultyID).then(res =>{
        }).catch(error => console.log('error in create course'));

        this.setState({
            name: "",
            facultyID:-1
        });

    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <label>
                    Course Name:
                </label>

                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                />


                <br />
                <label>
                    Faculty:
                </label>

                <select value={this.state.facultyID} onChange={this.handleFacultyChange}>
                    <option value="-1">Select Faculty</option>
                    {

                        this.state.facultys.map(faulty => (
                            <option key={faulty.id} value={faulty.id}>{faulty.name}</option>
                        ))
                    }


                </select>


                <br />
                <br />
                <input type="submit" value="Create Course" />
                <hr />
            </form>
        );
    }
}

export default AddCourse;