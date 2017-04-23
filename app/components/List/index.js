import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class List extends Component {

  static propTypes = {

  }

  static navigationOptions = {
    tabBarIcon: <Icon name='list' size={30} color='#ffffff' />,
    showLabel: false
  }

  static tabBarOptions = {
    showLabel: false
  }

  render () {
    return (
      <View style={styles.mainView}>
        <Text style={{fontSize: 30}}> List </Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  mainView: {
    height: 400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    backgroundColor: '#c12655'
  }
})
