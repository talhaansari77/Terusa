import { View, Text } from 'react-native'
import React from 'react'
import CustomText from './src/components/CustomText'
import { Montserrat } from './src/utils/Fonts'
import RootNavigator from './src/routes'
import SendAmountScreen from './src/screens/Main/SendAmountScreen/SendAmountScreen'
import WalletScreen from './src/screens/Main/WalletScreen/WalletScreen'
import RecivedAmountScreen from './src/screens/Main/RecivedAmountScreen/RecivedAmountScreen'

const App = () => {
  return <RootNavigator/>
  // return <RecivedAmountScreen/>
}

export default App