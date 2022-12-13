import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomText from '../../../components/CustomText';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import styled from 'react-native-styled-components';
import {images} from '../../../assets/images';
import {colors} from '../../../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import CustomGradientButton from '../../../components/CustomGradientButton';
import {Spacer} from '../../../components/Spacer';
import AppHeader from '../../../components/AppHeader';
import {XAxis, AreaChart, Grid, Path} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {
  Defs,
  LinearGradient as LinearGradientSvg,
  Stop,
  Circle,
  G,
  Line as LineHorizantol,
} from 'react-native-svg';
import {Montserrat, Roboto} from '../../../utils/Fonts';
import commonStyles from '../../../utils/CommonStyles';
import CustomButton from '../../../components/CustomButton';

const WalletScreen = ({navigation, route}) => {
  // const percent =route?.params?.coin?.price_change_percentage_24h?.toFixed(2);

  const Data = [
    {
      date: '26 march,2020',
      action: 'Recived',
      image: images.LeftArrow,
      blueImage: images.RecivedBlueIcon,
      time: '11:50 AM',
      point: '+0.054',
      doller: '$3.39',
    },
    {
      date: '26 march,2020',
      action: 'send',
      image: images.RightArrow,
      blueImage: images.SendBlueIcon,
      time: '11:50 AM',
      point: '+0.054',
      doller: '$3.39',
    },
  ];
  const BitCoinGraphData = [
    55, 50, 60, 70, 90, 80, 65, 25, 30, 5, 40, 30, 47, 70, 55, 99, 55, 65, 40,
    45, 45,
  ];

  const sendSwipeData = [
    {id: 1, txt: 'Send', img: images.upArrow,},
    {id: 2, txt: 'Receive', img: images.down},
    {id:3,txt:"Swap",img:images.swap},
  ];
  const xdata = ['24H', '7D', '1M', '3M', '6M', '1Y'];

  const Line = ({line}) => (
    <Path
      key={'line'}
      stroke={colors.orange}
      d={line}
      strokeWidth={2}
      fill={'none'}
      clipPath={'url(#clip-path)'}
    />
  );
  const Gradient = ({index}) => (
    <Defs key={index}>
      <LinearGradientSvg
        id={'gradient'}
        x1={'10%'}
        y1={'10%'}
        x2={'10%'}
        y2={'80%'}>
        <Stop offset={'0%'} stopColor={'rgb(95, 94, 108)'} stopOpacity={1} />
        <Stop offset={'100%'} stopColor={'rgb(71, 80, 109)'} stopOpacity={1} />
      </LinearGradientSvg>
    </Defs>
  );

  const Tooltip = ({x, y}) => (
    <G x={x(5) - 75 / 2} key={'tooltip'}>
      <G x={75 / 2}>
        <LineHorizantol
          y1={50 + 40}
          y2={y(BitCoinGraphData[5])}
          stroke={'white'}
          strokeWidth={1}
        />
        <Circle
          cy={y(BitCoinGraphData[5])}
          r={6}
          stroke={colors.white}
          strokeWidth={2}
        />
      </G>
    </G>
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <PH20>
        <AppHeader
          img={images.wallet}
          txt={route?.params?.coin?.name}
          fontSize={18}
          rightImg={images.SettingImage}
          rightOnPress={() => navigation.navigate('SettingScreen')}
        />
      </PH20>
      <PH20>
        <View style={[styles.shadowContainer, styles.marginTop]}>
          <LinearGradient
            colors={[colors.darkGreyBlueThired, colors.duskSecond]}
            style={styles.flatList}>
            <View style={styles.innterHeader}>
              <CustomText
                label="COIN"
                fontFamily={Montserrat.SemiBold}
                color={colors.white}
              />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CustomText
                  label="$44.18"
                  fontFamily={Montserrat.SemiBold}
                  color={colors.white}
                />
                <CustomText
                  label="-1.12%"
                  fontFamily={Montserrat.SemiBold}
                  color={colors.red}
                  marginLeft={5}
                />
              </View>
            </View>
            <Spacer height={40} />
            <View style={{alignItems: 'center'}}>
              <View style={styles.imgContainer}>
                <Image source={ route?.params?.data?.img} style={commonStyles.img} />
              </View>
              <Spacer height={10} />

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {/* <CustomText
                  label="0"
                  fontFamily={Montserrat.SemiBold}
                  fontSize={16}
                  color={colors.white}
                /> */}
                <CustomText
                  label={ route?.params?.data?.number}
                  fontFamily={Montserrat.SemiBold}
                  color={colors.white}
                  fontSize={16}
                  marginLeft={10}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '10%',
              }}>
                 <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={()=>{
                    navigation.navigate("SendAmount")

                  }}
                  >
                    <View
                      style={styles.sendContainer}>
                      <Image
                        source={images.upArrow}
                        style={{width: 20, height: 20, tintColor: colors.white}}
                      />
                    </View>

                    <CustomText
                      label={"Send"}
                      fontSize={13}
                      fontWeight={'400'}
                      fontFamily={Roboto.SemiBold}
                      color={colors.white}
                      alignSelf="center"
                      marginTop={5}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={()=>{
                    navigation.navigate("RecivedAmountScreen")

                  }}
                  >
                    <View
                      style={styles.sendContainer}>
                      <Image
                        source={images.down}
                        style={{width: 20, height: 20, tintColor: colors.white}}
                      />
                    </View>

                    <CustomText
                      label={"Receive"}
                      fontSize={13}
                      fontWeight={'400'}
                      fontFamily={Roboto.SemiBold}
                      color={colors.white}
                      alignSelf="center"
                      marginTop={5}
                    />
                  </TouchableOpacity>
                  {
                    route?.params?.data?.swap==true?(

                      <TouchableOpacity
                      activeOpacity={0.6}
                      onPress={()=>{
                        navigation.navigate("SwapScreen")
    
                      }}
                      >
                        <View
                          style={styles.sendContainer}>
                          <Image
                            source={images.swap}
                            style={{width: 20, height: 20, tintColor: colors.white}}
                          />
                        </View>
    
                        <CustomText
                          label={"Swap"}
                          fontSize={13}
                          fontWeight={'400'}
                          fontFamily={Roboto.SemiBold}
                          color={colors.white}
                          alignSelf="center"
                          marginTop={5}
                        />
                      </TouchableOpacity>
                      
                    ):<></>
                  }
                 
            
            </View>
          </LinearGradient>
        </View>

        <View>
          <Spacer height={20} />

          <CustomText
            label={'Transaction will appear here'}
            fontSize={13}
            fontWeight={'400'}
            fontFamily={Roboto.SemiBold}
            color={colors.white}
            alignSelf="center"
            marginTop={5}
          />

          <FlatList
            data={Data}
            contentContainerStyle={styles.paddingBottomSecond}
            renderItem={({item, index}) => (
              <View style={[styles.shadowContainer, styles.securityMarginTop]}>
                <Text style={styles.flatListInnerDate}>{item.date}</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('TransactionDetails');
                  }}
                  activeOpacity={0.9}>
                  <LinearGradient
                    start={{x: 0.0, y: 0.25}}
                    end={{x: 0.8, y: 0.0}}
                    colors={[
                      colors.darkGreyBlueThired,
                      colors.darkGreyBlueThired,
                      colors.duskSecond,
                    ]}
                    style={styles.securityFlatListView}>
                    <View style={styles.flatListInnerView}>
                      <Image
                        source={item.image}
                        style={styles.flatListInnerImage}
                      />
                      <View style={styles.itemDetailsView}>
                        <View style={styles.flatListInnerText}>
                          <Text style={styles.flatListInnerActionTitle}>
                            {item.action}
                          </Text>
                          <Text style={styles.flatListInnerRightTitle}>
                            {item.point}
                          </Text>
                        </View>
                        <View style={styles.flatListInnerText}>
                          <Text style={styles.flatListInnerFullTextTitle}>
                            {item.time}
                          </Text>
                          <Text style={styles.flatListInnerRightDollerTitle}>
                            {item.doller}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            )}
          />

          <CustomButton
            title="Buy Dash"
            height={35}
            width={'50%'}
            alignSelf="center"
          />
        </View>
      </PH20>
    </SafeAreaView>
  );
};

export default WalletScreen;

const PH10 = styled(View, {
  paddingHorizontal: scale(10),
});
const PH20 = styled(View, {
  paddingHorizontal: scale(20),
});

const styles = StyleSheet.create({
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
  marginTop: {},
  flatList: {
    padding: 20,
    width: '100%',
    height: verticalScale(250),
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.blueBorder,
  },
  innterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bitcoinImage: {
    height: 50,
    width: 60,
    left: 10,
    resizeMode: 'contain',
  },
  bitcoinView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  bitcoinLeftView: {
    width: '40%',
  },
  imgContainer: {
    width: 60,
    height: 60,
    borderRadius: 99,
    overflow: 'hidden',
  },
  bitcoinRightView: {
    left: 20,
    width: '40%',
  },
  leftDollerPrice: {
    fontSize: 18,
    //...Fonts.style.boldFontWhite,
    color: colors.white,
    fontWeight: 'bold',
    top: 5,
  },
  leftBTCPrice: {
    fontSize: 12,
    //...Fonts.style.mediumBluegrey,
    color: colors.bluegrey,

    top: 7,
  },
  leftBTCPercentage: {
    fontSize: 12,
    left: 5,
    //...Fonts.style.mediumFrogGreen
    color: colors.frogGreen,
  },
  rightSideText: {
    fontSize: 18,
    //...Fonts.style.boldFontOrange
    color: colors.orange,
    fontWeight: 'bold',
  },
  rightSideBalanceText: {
    fontSize: 14,
    //...Fonts.style.mediumBluegrey,
    color: colors.bluegrey,

    marginTop: 5,
  },
  rightDollerPrice: {
    fontSize: 18,
    //...Fonts.style.boldFontWhite,
    color: colors.white,
    fontWeight: 'bold',
    marginTop: 5,
  },
  rightSideValueText: {
    fontSize: 14,
    //...Fonts.style.mediumBluegrey,
    color: colors.bluegrey,

    marginTop: 5,
  },
  separatorLine: {
    width: '100%',
    height: 1,
    backgroundColor: colors.darkGreyBlue,
    marginTop: 10,
  },
  separatorLineRight: {
    width: '100%',
    height: 1,
    backgroundColor: colors.darkGreyBlue,
    marginTop: 5,
  },
  separatorWhiteLine: {
    width: '65%',
    height: 1,
    backgroundColor: colors.darkBlueSeparator,
    left: 8,
    top: 18,
  },
  activityView: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  activityText: {
    fontSize: 18,
    //...Fonts.style.boldFontWhite
    color: colors.white,
    fontWeight: 'bold',
  },
  securityFlatListView: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.darkGreyBlue,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  securityMarginTop: {
    marginTop: 25,
  },
  flatListInnerDate: {
    fontSize: 16,
    //...Fonts.style.semiBoldWhite,
    color: colors.white,
    fontWeight: '600',
    left: 20,
    // bottom: isIphoneX() ? '5' : '6'
  },
  recivedTextView: {
    flexDirection: 'row',
  },
  reciveText: {
    right: 0,
    position: 'absolute',
  },
  flatListInnerImage: {
    height: 15,
    width: 15,
    top: 10,
    resizeMode: 'contain',
  },
  flatListInnerView: {
    flexDirection: 'row',
    padding: 10,
  },
  itemDetailsView: {
    width: '100%',
    justifyContent: 'center',
  },
  flatListInnerText: {
    width: '100%',
    flexDirection: 'row',
  },
  flatListInnerActionTitle: {
    fontSize: 14,
    paddingLeft: 10,
    marginBottom: 2,
    //...Fonts.style.mediumBluegrey
    color: colors.bluegrey,
    fontWeight: '400',
  },
  flatListInnerRightTitle: {
    right: 18,
    position: 'absolute',
    //...Fonts.style.mediumFontOrange
    fontWeight: '400',
    color: colors.orange,
  },
  flatListInnerRightDollerTitle: {
    right: 18,
    position: 'absolute',
    fontWeight: '400',
    //...Fonts.style.mediumWhite
    color: colors.white,
  },
  sendContainer:{
    width: 40,
    height: 40,
    borderRadius: 99,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '10%',
  },
  flatListInnerFullTextTitle: {
    //...Fonts.style.mediumWhite,
    color: colors.white,

    fontWeight: '400',
    paddingLeft: 10,
    fontSize: 14,
    marginBottom: 2,
    top: 3,
  },
  bottomSideImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  graphView: {
    height: 150,
    flexDirection: 'row',
  },
  linearChartView: {
    flex: 1,
    marginLeft: 10,
  },
  flatListFooterContainer: {
    width: '100%',
    paddingHorizontal: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20,
    position: 'absolute',
  },
  roundShapeBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#000000',
    opacity: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paddingBottomSecond: {paddingBottom: 25},

  hBtn: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },

  flatListButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendText: {
    fontSize: 14,
    //...Fonts.style.semiBoldWhite
    color: colors.white,
    fontWeight: '600',
  },
  recivedText: {
    fontSize: 14,
    top: 10,
    //...Fonts.style.mediumWhite
    color: colors.white,
    fontWeight: '400',
  },
  linemarginTop: {
    marginTop: 10,
  },
  gText: {
    fontSize: 14,
    //...Fonts.style.regularBluegrey
    color: colors.bluegrey,
  },
  contentInset: {
    top: 20,
    bottom: 20,
  },
  contentInsetXaxis: {left: 10, right: 10},
  xAxis: {
    marginHorizontal: -10,
    height: 20,
    marginTop: 20,
  },
  lineChart: {
    height: 230,
  },
  chartWidget: {
    marginTop: 20,
  },
  chart: {
    width: '100%',
    height: 124,
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  view: {
    width: '50%',
  },

  middleLine: {
    width: 2,
    height: 44,
    backgroundColor: colors.white,
  },
  bottomButtonView: {
    width: '100%',
    flexDirection: 'row',
  },
  bottomButtonInnerView: {
    width: '50%',
  },
  buttonStyle: {
    flexDirection: 'row',
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleShapeView: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    right: 10,
  },
  circleInnerImage: {
    width: 12,
    height: 12,
  },
  xAxisTop: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  xAxisTopHr: {
    width: '80%',
    height: 1,
    marginBottom: 3,
    backgroundColor: colors.bluegrey,
  },
  xAxisAmt: {
    //...Fonts.style.regularBluegrey,
    color: colors.bluegrey,

    fontSize: 14,
  },
  areaChart: {
    height: 157,
    width: '114%',
    right: 20,
  },
  xAxisBottom: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  xAxisBottomHr: {
    width: '80%',
    height: 1,
    marginTop: 3,
    backgroundColor: colors.bluegrey,
  },
  xAxisSvg: {
    //...Fonts.style.boldFontBlue,
    color: colors.blue,
    fontWeight: 'bold',

    fontSize: 16,
  },
});
