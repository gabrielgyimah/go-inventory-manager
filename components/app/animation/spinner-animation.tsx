import LottieView from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';

interface SpinnerProps {
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ color = '#0000ff'}) => {
  const animationRef = useRef<LottieView>(null);
  return (
    <View style={styles.container}>
      <LottieView
        ref={animationRef}
        autoPlay
        style={{
          width: 160,
          maxWidth: 160,
          aspectRatio: 1,
        }}
        source={require('@/assets/animation/spinner.json')}
        testID="lottieView"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Spinner;
