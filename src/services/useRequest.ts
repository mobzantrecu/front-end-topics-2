// useRequest.js
import { gql, GraphQLClient } from "graphql-request";
import { useQuery } from "react-query";

const API_URL = `https://rickandmortyapi.com/graphql`;

const graphQLClient = new GraphQLClient(API_URL);

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
      }
    }
  }
`;

export function useGetCharacters() {
  return useQuery("get-posts", async () => {
    const data = await graphQLClient.request(gql`
      ${GET_CHARACTERS}
    `);
    return data;
  });
}
