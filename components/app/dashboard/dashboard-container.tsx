import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StyledPrimaryContainer } from '../ui/styled-components/style-container'
import ThemeSettingsButton from '../settings/theme-settings-button'
import AppIcons from '../ui/icons/app-icons'

export default function DashboardContainer() {
  return (
    <StyledPrimaryContainer style={{ justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>Dash board</Text>
      <ThemeSettingsButton />
      <AppIcons name='GreenEnvelope'/>
      <AppIcons name='GreenNoProducts'/>
      <AppIcons name='Televison'/>
      <AppIcons name='Airpods'/>
      <AppIcons name='Speakers'/>
      <AppIcons name='Storage'/>
    </StyledPrimaryContainer>
  )
}