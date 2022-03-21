import React from 'react';
import LottieView from 'lottie-react-native';

export const YouWinAnimation = () => {
  return (
    <LottieView
      source={require('./you_won.json')}
      autoPlay={true}
      loop={true}
      style={{
        alignContent: 'center',
        alignSelf: 'center',
        width: 300,
        height: 300,
        flexWrap: 'wrap',
        flexDirection: 'row',
      }}
    />
  );
};

export const YouLostAnimation = () => {
  return (
    <LottieView
      source={require('./you_lost.json')}
      autoPlay={true}
      loop={true}
      style={{
        alignSelf: 'center',
        width: 200,
        height: 300,
      }}
    />
  );
};

export default {YouLostAnimation, YouWinAnimation};
