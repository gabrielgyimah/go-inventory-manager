import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StyledMutedBorderContainer, StyledPrimaryContainer } from '../ui/styled-components/style-container'
import { StyledBodyMutedText, StyledH1MutedText, StyledH3MutedText, StyledH3PrimaryText, StyledH4MutedText, StyledH4PrimaryText, StyledH5PrimaryText } from '../ui/styled-components/style-texts'
import { useAuth } from '@/context/auth-context'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@/context/theme-context'
import CurrentTime from '../utils/time'
import { useOrganization } from '@/context/organization-context'
import { Link } from 'expo-router'
import InventorySummary from './inventory-summary'
import AppIcons from '../ui/icons/app-icons'

export default function DashboardContainer() {
  const { user } = useAuth()
  const { theme } = useTheme()
  const { organization } = useOrganization()
  return (
    <StyledPrimaryContainer style={styles.container}>
      <View style={styles.topContainer}>
        <View style={{flex: 1, gap: 4}}>
          <StyledH3PrimaryText text={`${user?.first_name} ${user?.last_name}`} />
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name='location-outline' color={theme.text.muted} size={20}/>
              <StyledH4MutedText style={{ fontWeight: 'normal'}} text={organization?.country} />
            </View>
            <StyledH3MutedText style={{ fontWeight: '100'}} text=' | '/>
            <CurrentTime />
          </View>
        </View>
        <Link href={"#"}>
          <Ionicons name='notifications-outline' size={36} color={theme.text.muted}/>
        </Link>
      </View>
      <View style={styles.analytics}>
        <InventorySummary />
        <View style={styles.stockMonitor}>
          <StyledMutedBorderContainer style={{ padding: 12, flex: 1}}>
            <View style={styles.stockMonitor}>
              <AppIcons name='StockLevelsIcon' size={22} color={theme.others.gold} />
              <View style={{ gap: 20}}>
                <StyledBodyMutedText text='Low In Stock'/>
                <StyledH3PrimaryText text='0' />
              </View>
              <AppIcons name='ExpandIcon' size={24} />
            </View>
          </StyledMutedBorderContainer>
          <StyledMutedBorderContainer style={{ padding: 12, flex: 1}}>
            <View style={styles.stockMonitor}>
              <AppIcons name='ExpiredIcon' size={24} color={theme.status.danger} />
              <View style={{ gap: 20}}>
                <StyledBodyMutedText text='Expired Stock'/>
                <StyledH3PrimaryText text='0' />
              </View>
              <AppIcons name='ExpandIcon' size={24} />
            </View>
          </StyledMutedBorderContainer>
        </View>
      </View>

      <View>
        <View style={styles.stockMonitor}>
          <StyledH4PrimaryText style={{flex: 1}} text='Top Products'/>
          <Ionicons name='arrow-forward-outline' color={theme.text.muted} size={24} />
        </View>
      </View>
    </StyledPrimaryContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    gap: 24,
  },
  topContainer: {
    paddingTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }, 
  analytics: {
    gap: 24,
    
  },
  stockMonitor: {
    flexDirection: 'row',
    gap: 16,
  }
})