import { gql } from "@apollo/client";


export const GET_USER = gql`
    query {
        getUserList {
            id
            firstName
            lastName
            email
            password
        }
    }
`;