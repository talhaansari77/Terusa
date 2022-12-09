import {View} from 'react-native';
import LottieView from 'lottie-react-native';

const SuccessLoader = () => {
  return  <LottieView
  style={{height: 100,alignSelf:"center"}}
  source={require('./success.json')}
  autoPlay
  // speed={1}
  loop={false}
/>
};

export default SuccessLoader;
