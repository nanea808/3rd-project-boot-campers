import { gql } from '@apollo/client';

//user signup mutation
export const ADD_USER = gql`
    mutation addUser($username: String!) {
        addUser(username: $username) {
            _id
            username
            name
            email
            password
            skills
        }
    }
`;

//user add skill mutation
export const ADD_SKILL = gql`
    mutation addSkill($userId: ID!, $skill: String!) {
        addSkill(userId: $userId, skill: $skill) {
            _id
            username
            skills
        }
    }
`;

//user delete profile mutation
export const DELETE_USER = gql`
    mutation deleteUser($username: String!) {
        deleteUser(username: $username) {
            _id
            username
            name
            email
            password
            skills
        }
    }
`;

//user delete skill mutation
export const DELETE_SKILL = gql`
    mutation deleteSkill($userId: ID!, $skill: String!) {
        deleteSkill(userId: $userId, skill: $skill) {
            _id
            _username
            _skills
        }
    }
`;

//user create task

//user create request

//user follow task (a followed/supported task is viewable on user profile page)