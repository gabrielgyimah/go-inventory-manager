import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BorderedButton from '../ui/buttons/bordered-buttons'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@/context/theme-context'
import Separator from '../ui/separator'
import { StyledBodyPrimaryText, StyledH3PrimaryText, StyledH4MutedText, StyledH4PrimaryText } from '../ui/styled-components/style-texts'
import Animated from 'react-native-reanimated'

interface SocialSignInsProps {
  title: string;
}

export default function SocialSignIns({
  title
}: SocialSignInsProps) {
  const { theme, mode, primaryBackgroundColorAnimation } = useTheme()

  const handleGoogleSignOn = async () => {}
  const handleAppleSignOn = async () => {}
  return (
    <View style={styles.container}>
      <View>
        <Separator />
        <Animated.View 
          style={[{
            position: 'absolute', top: -8, alignSelf: 'center', paddingHorizontal: 10,
            backgroundColor: theme.background.primary
          }]}>
          <StyledBodyPrimaryText text={title} />
        </Animated.View>
      </View>
      <View style={styles.content}>
        <View style={{flex: 1}}>
          <BorderedButton 
            title='Google' 
            icon={<Ionicons name='logo-google' size={28} color={theme.text.primary} />}
            TextStyle={{ color: theme.text.primary}}
            onPressHandler={handleGoogleSignOn} 
          />
        </View>
        <View style={{flex: 1 }}>
          <BorderedButton 
            icon={<Ionicons name='logo-apple' size={28} color={theme.text.primary} />} 
            title='Apple' 
            TextStyle={{ color: theme.text.primary}}
            onPressHandler={handleAppleSignOn} 
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 32,
  },
  content: {
    flexDirection: 'row',
    gap: 16,
  }
})