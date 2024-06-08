import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StyledPrimaryContainer } from '../ui/styled-components/style-container'
import ThemeSettingsButton from '../settings/theme-settings-button'

export default function DashboardContainer() {
  return (
    <StyledPrimaryContainer style={{ justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>Dash board</Text>
      <ThemeSettingsButton />
    </StyledPrimaryContainer>
  )
}