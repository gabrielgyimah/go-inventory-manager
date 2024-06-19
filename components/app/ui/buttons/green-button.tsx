import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { useTheme } from '@/context/theme-context'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface GreenButtonProps {
  title: string;
  containerStyle?: ViewStyle;
  onPressHandler: () => void
}
export default function GreenButton({
  title,
  onPressHandler,
  containerStyle
}: GreenButtonProps) {
  const { theme } = useTheme()

  return (
    <View style={[{
      backgroundColor: theme.status.valid,
      borderRadius: 12}, containerStyle]}>
      <TouchableOpacity style={{ paddingVertical: 18, paddingHorizontal: 12}}
        onPress={onPressHandler}
      >
        <Text style={{ textAlign: 'center', color: theme.others.white, fontWeight: '700'}}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})