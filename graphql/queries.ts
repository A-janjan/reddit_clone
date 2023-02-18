import { gql } from "@apollo/client";

 
export const SUBREDDDIT_BY_TPOIC = gql`
    query MyQuery($topic: String!){
        SubredditListByTopic(topic: $topic){
            id
            topic
            created_at
        }
    }
`