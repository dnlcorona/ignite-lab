import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o86ing17m101z2efd8ecp3/master',
  cache: new InMemoryCache()
})