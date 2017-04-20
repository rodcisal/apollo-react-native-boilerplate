import React from 'react'
import { TabNavigator } from 'react-navigation'
import Step1 from '../components/Step1'
import Step2 from '../components/Step2'

export const Tabs = TabNavigator({
  Step1: {
    screen: Step1
  },
  Step2: {
    screen: Step2
  }
})
