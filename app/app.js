import React, { Component } from 'react'
import { View, Text } from 'react-native'

// import { graphql } from 'react-apollo'
// import gql from 'graphql-tag'

export default class App extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{textAlign: 'center'}}>Find President Info</Text>
      </View>
    )
  }
}
