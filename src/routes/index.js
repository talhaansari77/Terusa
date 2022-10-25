import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import AuthStack from './AuthStack/AuthStack';
import MainStack from './MainStack/MainStack';


const RootNavigator = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffff',
    },
  };

  const Stack = createStackNavigator();
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        // initialRouteName="EditProfile"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthStack" component={AuthStack} />

        <Stack.Screen name="MainStack" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
