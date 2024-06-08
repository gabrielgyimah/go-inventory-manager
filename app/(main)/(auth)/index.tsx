import React from 'react';
import { StyleSheet } from 'react-native';

import { useTheme } from '@/context/theme-context';
import { Theme } from '@/interfaces/theme-interface';
import Animated from 'react-native-reanimated';
import Onboarding from '@/components/app/ui/onboarding/onboarding';

export default function AuthOnBoardingScreen() {
  const { theme, primaryBackgroundColorAnimation } = useTheme()

  return (
    <Animated.View style={[styles(theme).container, primaryBackgroundColorAnimation]}>
      <Onboarding />
    </Animated.View>
  );
}

const styles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
