import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../../utils/Colors';

const SettingRender = ({item, index,counter}) => {
  const [checked, setChecked] = useState({
    btn1: false,
  });

  
  

  useEffect(() => {
    console.log('itemEnable', item.enable);

    if (item.enable == '1') {
      setChecked({...checked, btn1: true});
    }
  }, [counter]);

  const onHandelSetting = async () => {
    if (item.id == 1) {
      if (checked.btn1 == false) {
        setChecked({...checked, btn1: true});
        await AsyncStorage.setItem('notifi', '1');
        console.log('1data');
      } else {
        setChecked({...checked, btn1: false});
        await AsyncStorage.removeItem('notifi');
        console.log('2data');
      }
    } else if (item.id == 2) {
      if (checked.btn1 == false) {
        setChecked({...checked, btn1: true});
        await AsyncStorage.setItem('sound', '1');
        console.log('3data');
      } else {
        setChecked({...checked, btn1: false});
        await AsyncStorage.removeItem('sound');
        console.log('4data');
      }
    } else if (item.id == 5) {
      if (checked.btn1 == false) {
        setChecked({...checked, btn1: true});
        await AsyncStorage.setItem('finger', '1');
        console.log('5data');
      } else {
        setChecked({...checked, btn1: false});
        await AsyncStorage.removeItem('finger');
        console.log('6data');
      }
    } else if (item.id == 6) {
      if (checked.btn1 == false) {
        setChecked({...checked, btn1: true});
        await AsyncStorage.setItem('Face', '1');
        console.log('7data');
      } else {
        setChecked({...checked, btn1: false});
        await AsyncStorage.removeItem('Face');
        console.log('8data');
      }
    } else {
      console.log('jcbj');
    }
  };
  return (
    <View style={[styles.shadowContainer, styles.marginTop]}>
      <LinearGradient
        start={{x: 0.0, y: 0.0}}
        end={{x: 0.8, y: 0.0}}
        colors={[colors.darkGreyBlueSecond, colors.dusk]}
        style={styles.flatListView}>
        <TouchableOpacity
          onPress={item.onPress}
          disabled={item.touchable === true ? false : true}
          style={styles.flatListInnerView}>
          <Image source={item.image} style={styles.flatListInnerImage} />
          <View style={styles.itemDetailsView}>
            <Text style={styles.flatListInnerShortTitle}>{item.title}</Text>
            {item.currency == true && (
              <View style={styles.currencyTextView}>
                <Text style={styles.currencyText}>USD</Text>
              </View>
            )}
            {item.SwitchBtn == true && (
              <View style={styles.toggleView}>
                <Switch
                  trackColor={{
                    true: colors.darkGreyBlueSecond,
                    false: colors.dusk,
                  }}
                  value={checked.btn1}
                  onValueChange={onHandelSetting}
                />
              </View>
            )}
            <View style={styles.subTitleView}>
              <Text style={styles.subTitle}>{item.subTitle}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default SettingRender;

const styles = StyleSheet.create({
  flatList: {},
  flatListView: {
    width: '100%',
    padding: 15,
    justifyContent: 'center',
    shadowColor: colors.darkBlack,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 13,
    borderColor: colors.darkGreyBlue,
  },
  flatListInnerView: {
    flexDirection: 'row',
  },
  flatListInnerImage: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  itemDetailsView: {
    width: '100%',
    justifyContent: 'center',
    left: 5,
  },
  flatListInnerShortTitle: {
    width: '70%',
    paddingLeft: 8,
    //...Fonts.style.boldWhite
    color: colors.white,
    fontWeight: 'bold',
  },
  switchToggleView: {
    right: 35,
    position: 'absolute',
  },
  containerStyle: {
    width: 30,
    height: 10,
    borderRadius: 8,
    backgroundColor: '#ccc',
    padding: 0,
  },
  circleStyle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.lightBlueGrey,
  },
  subTitleView: {
    width: '70%',
    top: 3,
  },
  subTitle: {
    fontSize: 12,
    paddingLeft: 8,
    //...Fonts.style.mediumBluegrey
    color: colors.bluegrey,
    fontWeight: '400',
  },
  currencyText: {
    fontSize: 16,
    //...Fonts.style.semiBoldWhite
    color: colors.white,
    fontWeight: '400',
  },
  currencyTextView: {
    right: 35,
    position: 'absolute',
  },
  shadowContainer: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  marginTop: {
    marginTop: 10,
  },
  paddingBottom: {
    paddingBottom: 25,
  },
  toggleView: {
    right: 35,
    position: 'absolute',
  },
});
