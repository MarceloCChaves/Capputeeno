import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "http://localhost:3333/data",
  cache: new InMemoryCache(),
});

export default apolloClient;
