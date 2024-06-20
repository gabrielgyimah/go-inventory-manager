import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StyledMutedBorderContainer } from '../ui/styled-components/style-container'
import { StyledBodyMutedText, StyledH4MutedText, StyledH4PrimaryText } from '../ui/styled-components/style-texts'
import AppIcons from '../ui/icons/app-icons'
import { useTheme } from '@/context/theme-context'

export default function InventorySummary() {
  return (
    <StyledMutedBorderContainer style={styles.container}>
      <StyledH4PrimaryText text='Inventory Summary' />
      <View style={styles.content}>
        <RenderItem item={{ label: 'Products', icon: 'ShoppingBagIcon', value: '100'}} />
        <RenderItem item={{ label: 'Units', icon: 'InventoryIcon', value: '15,000'}} />
        <RenderItem item={{ label: 'Categories', icon: 'CategoryIcon', value: '10'}} />
        <RenderItem item={{ label: 'Value', icon: 'MoneyIcon', value: '1,000,000'}} />
      </View>
    </StyledMutedBorderContainer>
  )
}

const RenderItem = (item: any) => {
  const { theme } = useTheme()
  console.log({ item})
  return (
    <View style={styles.item}>
      <View style={styles.itemContent}>
        <AppIcons name={item.item.icon} size={24} color={theme.status.valid} />
        <View>
          <StyledBodyMutedText style={styles.text} text={item.item.label} />
          <StyledH4PrimaryText style={styles.text} text={item.item.value} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  content: {
    paddingTop: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: '50%', // Two items per row
    marginBottom: 24, // Adjust spacing between rows
  },
  itemContent: {
    flexDirection: 'row',
    gap: 4,
  },
  text: {
    fontWeight: 'normal', // Consistent fontWeight for all text elements
  },
})