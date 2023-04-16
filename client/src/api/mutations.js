import { gql } from "@apollo/client";

//user login
export const LOGIN_USER = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// //user signup mutation
// export const ADD_USER = gql`
//     mutation addUser($name: String!, $username: String!, $email: String!, $password: String!) {
//         addUser(username: name: $name, $username, email: $email, password: $password) {
//             name
//             username
//             email
//             password
//         }
//     }
// `;

// //user add skill mutation
// export const ADD_SKILL = gql`
//   mutation addSkill($userId: ID!, $skill: String!) {
//     addSkill(userId: $userId, skill: $skill) {
//       _id
//       username
//       skills
//     }
//   }
// `;

// //user delete profile mutation
// export const DELETE_USER = gql`
//   mutation deleteUser($username: String!) {
//     deleteUser(username: $username) {
//       username
//       name
//       email
//       password
//       skills
//     }
//   }
// `;

// //user delete skill mutation
// export const DELETE_SKILL = gql`
//   mutation deleteSkill($userId: ID!, $skill: String!) {
//     deleteSkill(userId: $userId, skill: $skill) {
//       _id
//       _username
//       _skills
//     }
//   }
// `;

//user create task
// export const ADD_TASK = gql`
//     mutation addTask($)
// `;

//user create request

//user follow task (a followed/supported task is viewable on user profile page)

//user delete task

//user delete request

//user unfollow task

//user update profile
// export const UPDATE_USER = gql`
//     mutation updateUser($userId: ID!) {
//         updateUser(userId: $userId) {

//         }
//     }
// `;
