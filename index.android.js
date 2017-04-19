
import React from 'react'
import { AppRegistry } from 'react-native'
import App from './app/app.js'

import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

const Client = () => {
  const networkInterface = createNetworkInterface({
    uri: 'http://127.0.0.1:3000/graphql'
  })
  const client = new ApolloClient({
    networkInterface
  })
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>)
}

AppRegistry.registerComponent('boilerplate', () => Client)
