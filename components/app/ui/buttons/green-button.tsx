import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/context/theme-context'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface GreenButtonProps {
  title: string;
  onPressHandler: () => void
}
export default function GreenButton({
  title,
  onPressHandler
}: GreenButtonProps) {
  const { theme } = useTheme()

  return (
    <TouchableOpacity style={{ 
      width: '100%', backgroundColor: theme.status.valid, paddingVertical: 18,
      borderRadius: 12, 
    }}
      onPress={onPressHandler}
    >
    <Text style={{ textAlign: 'center', color: theme.others.white, fontWeight: '700'}}>{title}</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})