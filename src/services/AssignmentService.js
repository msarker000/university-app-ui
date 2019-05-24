import APPLLO_CLIENT from './ApolloClientService'
import * as query from '../constants/index.js'

class AssignmentService{
    static _instance = null;
    _currentCourse= null;

    static getInstance() {
        if (AssignmentService._instance == null) {
            AssignmentService._instance = new AssignmentService();
        }

        return this._instance;
    }


    createAssigment = (_courseId, _title) =>{
        return APPLLO_CLIENT.mutate({
            mutation: query.CREATE_ASSIGNEMNT,
            variables: {
                name:_title,
                courseId:_courseId
            }}
        );
    }

    createAssigmentGrade = (_assignmentId, _studentId, _grade) =>{
        return APPLLO_CLIENT.mutate({
            mutation: query.CREATE_ASSIGNEMNT_GRADE,
            variables: {
                assignmentID:_assignmentId,
                studentID:_studentId,
                grade: _grade
            }}
        );
    }



    getAssignments = () => {
        return APPLLO_CLIENT
            .query({
                query: query.ALL_ASSIGNMENTS
            });

    }


    deleteAssigment = (_assignmentId) =>{
        return APPLLO_CLIENT.mutate({
            mutation: query.DELETE_ASSIGNMENT,
            variables: {
                assignmentId:_assignmentId
            }}
        );
    }


}


const instanceAssignmentService = AssignmentService.getInstance();
export default instanceAssignmentService;