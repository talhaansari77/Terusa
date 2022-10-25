import {
    scale,
    ScaledSheet,
    verticalScale,
    moderateScale,
  } from 'react-native-size-matters';
  // import colors from './colors';
  const commonStyles = ScaledSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: 15,
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
      marginBottom: verticalScale(10),
    },
    img: {
      width: '100%',
      height: '100%',
    },
    
    containerCenter: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default commonStyles;
  