import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useMemo, useRef } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@/context/theme-context'
import CustomBottomSheet from '../ui/custom-bottom-sheet'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated'

export default function ThemeSettingsButton() {
  const { 
    theme, mode, setThemeToDevice, setDarkMode, setLightMode ,
    primaryBackgroundColorAnimation,
    secondaryBackgroundColorAnimation,
    primaryTextColorAnimation
  } = useTheme()

  const bottomSheet = useRef<BottomSheetModal | null>(null)
  const bottomSheetSnapPoints = useMemo(() => ['40%'], [])
  const closeBottomSheet = () => bottomSheet.current?.close() 
  const openBottomSheet = () => bottomSheet.current?.present()


  const {width} = useWindowDimensions();
  const translateX = useSharedValue(0);
  const SWITCH_CONTAINER_WIDTH = width * 0.8;
  const SWITCH_WIDTH = SWITCH_CONTAINER_WIDTH / 3;

  const translateAnimation = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  useEffect(() => {
    if (mode === 'auto') {
      translateX.value = withSpring(SWITCH_WIDTH * 0);
    } else if (mode === 'light') {
      translateX.value = withSpring(SWITCH_WIDTH * 1);
    } else if (mode === 'dark') {
      translateX.value = withSpring(SWITCH_WIDTH * 2);
    }
  }, [SWITCH_WIDTH, mode, translateX]);

  const backgroundColorSlideAnimation = useAnimatedStyle(() => {
    return {
      backgroundColor:
        mode === 'dark' ? withTiming('#22272B') : withTiming('white'),
    };
  });

  return (
    <>
      <TouchableOpacity onPress={openBottomSheet}>
        <Ionicons name='sunny-outline' color={theme.text.primary} size={28} />
      </TouchableOpacity>

      <CustomBottomSheet isPanDownToCloseEnabled={false} ref={bottomSheet} customDetached snapPoints={bottomSheetSnapPoints} title='Theme'>
        <Animated.View style={[
          primaryBackgroundColorAnimation, { 
            paddingVertical: 20, justifyContent: 'center', alignItems: 'center',
            borderRadius: 12,
          }]}>
            <View style={{ paddingVertical: 20, gap: 12, justifyContent: 'center', alignItems: 'center'}}>
              <Ionicons size={40} name={mode === 'dark' ? 'sunny-outline' : 'moon-outline'} color={theme.text.primary}/>
              <Animated.Text style={primaryTextColorAnimation}>Choose theme</Animated.Text>
            </View>
          <Animated.View
            style={[
              styles.container,
              {
                width: SWITCH_CONTAINER_WIDTH,
              },
              secondaryBackgroundColorAnimation,
            ]}>
            <Animated.View
              style={[
                styles.slideContainer,
                {
                  width: SWITCH_WIDTH,
                },
                translateAnimation,
              ]}>
              <Animated.View
                style={[
                  styles.slide,
                  {
                    width: (width * 0.7) / 3,
                  },
                  primaryBackgroundColorAnimation,
                ]}
              />
            </Animated.View>
            <Pressable
              style={styles.button}
              onPress={setThemeToDevice}>
              <Animated.Text style={[styles.textButton, primaryTextColorAnimation]}>
                System
              </Animated.Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={setLightMode}
            >
              <Animated.Text style={[styles.textButton, primaryTextColorAnimation]}>
                Light
              </Animated.Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={setDarkMode}>
              <Animated.Text style={[styles.textButton, primaryTextColorAnimation]}>
                Dark
              </Animated.Text>
            </Pressable>
          </Animated.View>
        </Animated.View>
      </CustomBottomSheet>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 40,
    overflow: 'hidden',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textButton: {
    color: 'black',
    fontWeight: '500',
  },
  slideContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    padding: 23,
    borderRadius: 100,
  },
});