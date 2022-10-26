import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding from '../../screens/Auth/OnBoarding/OnBoarding';
import Welcome from '../../screens/Auth/Welcome/Welcome';
import SecurityWallet from '../../screens/Auth/SecurityWallet/SecurityWallet';




const AuthStack = ({navigation}) => {




  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={"SecurityWallet"}
    >
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SecurityWallet" component={SecurityWallet} />

    </Stack.Navigator>
  );
};

export default AuthStack;
