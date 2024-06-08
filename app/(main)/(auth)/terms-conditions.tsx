import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function TermsAndConditionsPage() {
  return (
    <>
      <Stack.Screen options={{
        headerShown: true,
      }} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{textAlign: 'center'}}>TermsConditionsPage</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({})