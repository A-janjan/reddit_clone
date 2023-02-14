import { gql } from "@apollo/client";

export const ADD_POST = gql`
    mutation MyMutation(
        $body: String!
        $id: String!
        $image: String!
        $subreddit_id: ID!
        $title: String!
        $username: String!
    ) {
        
    }
`