import React from 'react'
import { TabNavigator } from 'react-navigation'
import Home from '../components/Home'
import List from '../components/List'
import Profile from '../components/Profile'
import Library from '../components/Library'
import Help from '../components/Help'
import {styles} from '../styles'

export const Tabs = TabNavigator({
  Home: {
    screen: Home
  },
  List: {
    screen: List
  },
  Profile: {
    screen: Profile
  },
  Library: {
    screen: Library
  },
  Help: {
    screen: Help
  }
}, {
  tabBarOptions: {
    showLabel: false,
    inactiveBackgroundColor: styles.mainColor,
    activeBackgroundColor: styles.secondaryColor,
    style: {
      backgroundColor: styles.mainColor,
      height: 60
    }
  }
})
