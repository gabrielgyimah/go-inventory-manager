import AnimatedSplashScreen from '@/components/app/animation/splash-screen';
import { useAuth } from '@/context/auth-context';
import { useTheme } from '@/context/theme-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import 'react-native-reanimated';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function MainLayoutController() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);
  const [loaded, error] = useFonts({
    SpaceMono: require('@/assets/fonts/Satoshi-Medium.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      setAppIsReady(true);
    }
  }, [loaded]);

  const showAnimation = !appIsReady || !isAnimationFinished;
  const { isAuthenticated } = useAuth();
  const { primaryBackgroundColorAnimation } = useTheme();

  return (
    <Animated.View style={[{ flex: 1 }, primaryBackgroundColorAnimation]}>
      {showAnimation ? (
        <AnimatedSplashScreen setIsAnimationFinished={setIsAnimationFinished} />
      ) : (
        <Animated.View entering={FadeIn.duration(1000)} style={[{ flex: 1 }, primaryBackgroundColorAnimation]}>
          {isAuthenticated ? (
            <Stack>
              <Stack.Screen name="(main_app)" options={{ headerShown: false }} />
            </Stack>
          ) : (
            <Stack>
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            </Stack>
          )}
        </Animated.View>
      )}
    </Animated.View>
  );
}

