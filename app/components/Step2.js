import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Step2 extends Component {

  static propTypes = {

  }

  render () {
    return (
      <View style={{height: 400, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30}}> Step2! </Text>
      </View>
    )
  }

}
