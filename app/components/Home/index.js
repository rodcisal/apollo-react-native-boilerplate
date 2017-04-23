import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Images} from '../../images'
import {styles as globalStyles} from '../../styles'

export default class Home extends Component {

  static propTypes = {

  }

  static navigationOptions = {
    tabBarIcon: <Icon name='home' size={30} color='#ffffff' />,
    showLabel: false
  }

  render () {
    return (
      <View style={styles.mainView}>
        <Image source={Images.logo} style={styles.logo} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalStyles.secondaryColor,
    flex: 1
  },
  logo: {
    width: 100,
    resizeMode: 'contain'
  }
})
