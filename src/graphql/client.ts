import { ApolloClient, InMemoryCache } from "@apollo/client";

export const graphQLClient = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_URL,
  cache: new InMemoryCache(),
});