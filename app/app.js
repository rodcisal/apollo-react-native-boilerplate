import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Tabs } from './config/router'

// import { graphql } from 'react-apollo'
// import gql from 'graphql-tag'

export default class App extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <Tabs />
    )
  }
}
