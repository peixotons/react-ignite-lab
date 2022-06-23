import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8ygxd1cp801xx0pq8b2ya/master',
    cache: new InMemoryCache()
})