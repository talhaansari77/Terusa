import {
  scale,
  ScaledSheet,
  verticalScale,
  moderateScale,
} from 'react-native-size-matters';
import {

  Platform, View
} from 'react-native'
import styled from 'react-native-styled-components';
// import colors from './colors';
const commonStyles = ScaledSheet.create({
  container: {
  
    flexDirection: 'column',
    padding: 10,
    flex: 1,
  },

  rowMain: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  padding: {
    paddingHorizontal: 20,
  },

  justify: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding:10
  },
  iconContainer: {
    width: moderateScale(25),
    height: verticalScale(25),
  },
  img: {
    width: '100%',
    height: '100%',
  },
  
  containerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  IosPadding:{
    flex: 1,paddingTop:Platform.OS=="ios"?verticalScale(40):5,
    paddingHorizontal:moderateScale(15)
  }
  
});

export const PH10 = styled(View, {
  paddingHorizontal: scale(10),
});
export const PH20 = styled(View, {
  paddingHorizontal: scale(20),
});
export const PH30 = styled(View, {
  paddingHorizontal: scale(30),
});


export default commonStyles;
