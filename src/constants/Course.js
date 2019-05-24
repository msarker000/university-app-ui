import gql from 'graphql-tag'

export const ALL_COURSES = gql`query {
                            courses {
                              id name faculty {
                                        id name email
                                        }
                                      students{
                                        id name email
                                        }
                         
                            }
                            
                            }`;



// createCourse(name:"Data Engineering", facultyId: 4) {id name}
export const  CREATE_COURSE =gql`mutation createCourse($name: String, $facultyId: ID){
                 createCourse(name: $name, facultyId: $facultyId) {
                          id  name
                        }
                }
      `;


export const  DELETE_COURSE =gql`mutation deleteCourse($courseID: ID!){
                 deleteCourse(courseID: $courseID) {
                          id  name  
                        }
                }
      `;


export const  ADD_STUDENT_COURSE =gql`mutation addStudentCourse($userId: Int,  $courseId:Int){
                 addStudentCourse(userId: $userId, courseId:$courseId) {
                          id  
                        }
                }
      `;

