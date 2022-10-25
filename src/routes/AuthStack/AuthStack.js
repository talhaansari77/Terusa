import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding from '../../screens/Auth/OnBoarding/OnBoarding';
import Welcome from '../../screens/Auth/Welcome/Welcome';




const AuthStack = ({navigation}) => {




  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      // initialRouteName={"Report"}
    >
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Welcome" component={Welcome} />

    </Stack.Navigator>
  );
};

export default AuthStack;
