import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Profile extends Component {

  static propTypes = {

  }

  static navigationOptions = {
    tabBarIcon: <Icon name='account-circle' size={30} color='#ffffff' />,
    showLabel: false
  }

  render () {
    return (
      <View style={{height: 400, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30}}> Profile </Text>
      </View>
    )
  }

}
