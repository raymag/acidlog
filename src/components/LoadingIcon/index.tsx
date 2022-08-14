import React, {useRef, useEffect} from 'react';
import {Animated, Easing, Image} from 'react-native';
const loadingIcon = require('../../assets/icons/loading.png');
type LoadingIconProps = {
  size?: number;
};
const LoadingIcon = ({size = 50}: LoadingIconProps) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const rotate = () => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 360,
        duration: 500000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    rotate();
  }, []);

  return (
    <Animated.View
      style={[
        {
          height: size,
          width: size,
          transform: [{rotate: spin}],
        },
      ]}>
      <Image source={loadingIcon} style={[{height: size, width: size}]} />
    </Animated.View>
  );
};

export default LoadingIcon;
