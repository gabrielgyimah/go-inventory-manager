import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/context/theme-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import { StyledH3PrimaryText, StyledH4MutedText, StyledH4PrimaryText, StyledH5MutedText } from '../styled-components/style-texts'

interface BorderedButtonProps {
  title: string;
  onPressHandler: () => void,
  icon?: React.ReactNode;
}
export default function BorderedButton({
  title,
  onPressHandler,
  icon
}: BorderedButtonProps) {
  const { borderMutedColorAnimation } = useTheme()

  return (
    <Animated.View
      style={[{
        borderRadius: 12,
        borderWidth: 1,
      }, borderMutedColorAnimation]}
    >
      <TouchableOpacity 
        style={{ paddingVertical: 10, flexDirection: 'row', gap: 6, justifyContent: 'center', alignItems: 'center'}}
        onPress={onPressHandler}
      >
        {icon}
        <StyledH5MutedText textAlign='center' text={title} />
      </TouchableOpacity>
    </Animated.View>
  )
}
