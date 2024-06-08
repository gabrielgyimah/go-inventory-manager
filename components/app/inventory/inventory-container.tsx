import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StyledPrimaryContainer } from '../ui/styled-components/style-container'

export default function InventoryContainer() {
  return (
    <StyledPrimaryContainer style={{ justifyContent: 'center', alignItems: 'center', flex: 1,}}>
      <Text>Inventory</Text>
    </StyledPrimaryContainer>
  )
}