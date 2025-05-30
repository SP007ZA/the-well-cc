/* eslint-disable */
'use client';

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, ApolloLink} from "@apollo/client";
import { PropsWithChildren } from "react";

import { createClient } from 'graphql-ws';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { onError } from '@apollo/link-error';

import { endpoint, prodEndpoint, wsEndpoint, wsProdEndpoint } from "@/app/config";

const { createUploadLink } = require('apollo-upload-client');

// Setup a backup http link for Apollo
const httpLink = new HttpLink({
    uri:process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint
  });

  
  
  // Setup the WebSocket link for Apollo
  // NOTE: to stop Next.js SSR from breaking, we need to check if window is defined
  //  and if not, use the 'httpLink' instead
  const wsLink =
  typeof window !== 'undefined'
  ? new GraphQLWsLink(
      createClient({
        url: process.env.NODE_ENV === 'development' ? wsEndpoint : wsProdEndpoint,
      })
    )
  : httpLink;
  
  // Setup the Apollo client for subscriptions
  export const subClient = new ApolloClient({
    link: wsLink,
    cache: new InMemoryCache(),
  });

  export  const client = new ApolloClient({
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
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
      }),
      // this uses apollo-link-http under the hood, so all the options here come from that package
      createUploadLink({
        uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
        fetchOptions: {
          credentials: "include"
        },
        headers: {'Apollo-Require-Preflight': 'true'}
      }),
    ]),
      uri:  process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
      cache: new InMemoryCache()
  })

const KeystoneApolloProvider: React.FC<PropsWithChildren<{}>> = ({children}) =>{
 

    return <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
}

export default KeystoneApolloProvider