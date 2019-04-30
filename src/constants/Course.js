import gql from 'graphql-tag'

export const ALL_COURSES = gql`query {
                            courses {
                              id name professor {
                                        id name
                                        }
                                    assignments{
                                        name
                                        }
                            }
                         }`;




export const  CREATE_COURSE =gql`mutation createCourse($name: String!, $facultyID: ID!){
                 createCourse(name: $name,facultyID: $facultyID) {
                          id  name  professor{
                                            name email
                                        }
                        }
                }
      `;


export const  DELETE_COURSE =gql`mutation deleteCourse($courseID: ID!){
                 deleteCourse(courseID: $courseID) {
                          id  name  
                        }
                }
      `;

