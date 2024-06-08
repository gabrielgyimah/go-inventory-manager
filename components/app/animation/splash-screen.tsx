import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring, FadeIn, FadeInUp, FadeInDown, FadeOut, SlideInLeft, SlideInRight } from 'react-native-reanimated';
import { useTheme } from '@/context/theme-context';
import { useTextStyles } from '@/hooks/useTextStyles';
import ShoppinBagIcon from '../ui/svgs-as-icons/shopping-bag';
import { Theme } from '@/interfaces/theme-interface';

interface AnimatedSplashScreenProps {
  setIsAnimationFinished: React.Dispatch<React.SetStateAction<boolean>>
}


export default function AnimatedSplashScreen({
  setIsAnimationFinished
}: AnimatedSplashScreenProps) {

  const { theme } = useTheme();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimationFinished(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [setIsAnimationFinished]);

  return (
    <Animated.View
      exiting={FadeOut.duration(1000)}
      entering={FadeIn.duration(1000)}
      style={[styles(theme).container]}>
      <Animated.View
        entering={FadeInDown.duration(1000)} 
        exiting={FadeOut.duration(1000)} 
        style={[styles(theme).animatedContainer
      ]}>
          <ShoppinBagIcon height={32} width={32} color={theme.others.white} />
        <Text style={[styles(theme).logoText]}>GO. Inventory</Text>
      </Animated.View>
    </Animated.View>
  );
}

const styles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background.primary,
  },
  animatedContainer: {
    justifyContent: 'center',
    backgroundColor: theme.status.valid,
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
  },
  logoText: {
    color: theme.others.white,
    fontSize: 24,
    fontWeight: '500',
  }
});
