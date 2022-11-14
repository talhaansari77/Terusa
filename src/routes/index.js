import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import AuthStack from './AuthStack/AuthStack';
import MainStack from './MainStack/MainStack';
import { StatusBar } from 'react-native';

const RootNavigator = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'rgb(48,62,96)',
    },
  };

  const Stack = createStackNavigator();
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
<<<<<<< HEAD
      <Stack.Screen name="AuthStack" component={AuthStack} />
=======
        <Stack.Screen name="AuthStack" component={AuthStack} />
>>>>>>> 87d4450173bca2103eb95470afd05e6ea4a89669
        <Stack.Screen name="MainStack" component={MainStack} />
      </Stack.Navigator>
      <StatusBar barStyle={'light-content'}/>
    </NavigationContainer>
  );
};

export default RootNavigator;
