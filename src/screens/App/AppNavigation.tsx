import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Drawer, DrawerItem} from '@ui-kitten/components';
import {Listing} from './listings/Listing';

const {Navigator, Screen} = createDrawerNavigator();

const DrawerContent = ({navigation, state}: any) => {
  return (
    <Drawer
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index.row])}>
      <DrawerItem title="listing" />
    </Drawer>
  );
};

export const AppNavigator = () => (
  <Navigator drawerContent={(props: any) => <DrawerContent {...props} />}>
    <Screen name="Listings" component={Listing} />
  </Navigator>
);
