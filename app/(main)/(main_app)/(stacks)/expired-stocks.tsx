import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StyledPrimaryContainer } from '@/components/app/ui/styled-components/style-container'

export default function ExpiredStocks() {
  return (
    <StyledPrimaryContainer style={styles.container}>
      <Text>ExpiredStocks</Text>
    </StyledPrimaryContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})