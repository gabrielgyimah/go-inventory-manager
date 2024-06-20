import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StyledPrimaryContainer } from '../ui/styled-components/style-container'
import { StyledH1MutedText, StyledH3MutedText, StyledH3PrimaryText } from '../ui/styled-components/style-texts'
import { useAuth } from '@/context/auth-context'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@/context/theme-context'
import CurrentTime from '../utils/time'

export default function DashboardContainer() {
  const { user } = useAuth()
  const { theme } = useTheme()
  return (
    <StyledPrimaryContainer style={styles.container}>
      <View style={styles.topContainer}>
        <StyledH3PrimaryText text={`${user?.first_name} ${user?.last_name}`} />
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons name='location-outline' color={theme.text.muted} size={20}/>
          <StyledH3MutedText style={{ fontWeight: 'normal'}} text=' | '/>
          <CurrentTime />
        </View>
      </View>
    </StyledPrimaryContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  topContainer: {
    paddingTop: 24
  }
})