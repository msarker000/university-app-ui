import gql from 'graphql-tag'


        export const  CREATE_ASSIGNEMNT =gql`mutation createAssignment( $name: String, $courseId: ID){
                 createAssignment(name: $name, courseId: $courseId) {
                          id name course{
                                    id name
                            }
                        }
                }
      `;



export const  CREATE_ASSIGNEMNT_GRADE =gql`mutation addAssignmentGrade($userId: Int, $assignmentId:Int, $grade: Float){
                 addAssignmentGrade(userId: $userId,assignmentId: $assignmentId, grade:$grade) {
                           id userId assignmentId grade
                                        
                        }
                }
      `;



export const  DELETE_ASSIGNMENT = gql`mutation deleteAssignment($assignmentId: ID!){
                 deleteAssignment(assignmentId: $assignmentId) {
                          id  name  
                        }
                }
      `;

export const ALL_ASSIGNMENTS = gql`query {
                          assignments{
                                  id name course{id name} 
                                }
                        }
                `;