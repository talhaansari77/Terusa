import {
    scale,
    ScaledSheet,
    verticalScale,
    moderateScale,
  } from 'react-native-size-matters';
  import {
  
    Platform
  } from 'react-native'
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
      flex: 1,paddingTop:Platform.OS=="ios"?verticalScale(35):0,
      paddingHorizontal:moderateScale(15)
    }
  });

  
  export default commonStyles;
  