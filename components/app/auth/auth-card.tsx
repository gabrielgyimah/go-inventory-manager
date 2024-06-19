import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/context/theme-context';
import { useTextStyles } from '@/hooks/useTextStyles';
import Animated from 'react-native-reanimated';
import { StyledBodyMutedText, StyledBodyPrimaryText, StyledH3PrimaryText } from '../ui/styled-components/style-texts';
import { Link } from 'expo-router';

export interface AuthCardProps {
  title: string;
  description: string;
  navigationDescrtiption?: string;
  navigationTitle?: string;
  navigationLink?: string;
  children: React.ReactNode;
}

export default function AuthCard({
  title,
  description,
  navigationTitle,
  navigationLink,
  navigationDescrtiption,
  children
}: AuthCardProps) {

  const { primaryBackgroundColorAnimation, theme } = useTheme()

  return (
    <View style={[styles.container]}>
      <View>
        <StyledH3PrimaryText text={title} />
        <StyledBodyMutedText text={description} />
      </View>
      <View style={styles.content}>
        {children}
        {navigationLink && navigationTitle && navigationDescrtiption && (
          <Link href={navigationLink} style={{
            flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
          }}>
            <StyledBodyMutedText text={navigationDescrtiption} style={{ textAlign: 'center'}}/>
            <Text style={{ fontWeight: '700', color: theme.status.valid}}>{navigationTitle}</Text>
          </Link>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 32,
    paddingTop: 40,
  },
  content: {
    width: '100%',
    gap: 24
  }
})