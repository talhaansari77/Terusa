import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomText from '../../../../components/CustomText';
import BitCoineContainer from './BitCoineContainer';
import {colors} from '../../../../utils/Colors';
import {Montserrat} from '../../../../utils/Fonts';
import NftContainer from './NftContainer';
const Tab = createMaterialTopTabNavigator();
const TopNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'transparent',
          marginHorizontal: scale(10),
          elevation: 0,
        },
        tabBarAllowFontScaling: true,
        tabBarLabel: ({focused, size, color}) => {
          let screenName = '';
          if (route.name === 'Token') {
            screenName = 'Tokens';
            color = focused ? colors.white : colors.gray;
          } else if (route.name === 'NFTS') {
            screenName = 'NFTs';
            color = focused ? colors.white : colors.gray;
          }
          return (
            <CustomText
              label={screenName}
              color={color}
              fontSize={13}
              fontWeight={'600'}
              fontFamily={Montserrat.SemiBold}
            />
          );
        },
        tabBarLabelStyle: {fontSize: 12},
        // tabBarItemStyle: {width: 180},
        // tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.white,
        },
      })}>
      <Tab.Screen name="Token" component={BitCoineContainer} />
      <Tab.Screen name="NFTS" component={NftContainer} />
    </Tab.Navigator>
  );
};

export default TopNav;
