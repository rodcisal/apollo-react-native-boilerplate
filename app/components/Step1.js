import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Step1 extends Component {

  static propTypes = {

  }

  static navigationOptions = {
    tabBarLabel: 'STEP 1'
  }

  render () {
    return (
      <View style={{height: 400, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30}}> Step 1! </Text>
      </View>
    )
  }

}
