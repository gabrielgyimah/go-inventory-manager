import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/context/theme-context'

export default function Separator() {
  const {theme} = useTheme()
  return (
    <View style={{height: StyleSheet.hairlineWidth, backgroundColor: theme.text.muted}} />
  )
}
