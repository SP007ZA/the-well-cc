import { endpoint, prodEndpoint } from "@/app/config";
import { from, HttpLink, InMemoryCache, ApolloClient } from '@apollo/client'
import { onError } from '@apollo/link-error';

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  // ... error handling logic
  if (networkError) {
    // You must return forward(operation) to retry the request after handling the error
     if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          );
        if (networkError)
          console.log(
            `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
          );
           return forward(operation);
      }
   

});
 
const httpLink = new HttpLink({ uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint, });
 
 export  const serverClient = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache()
  })