import React from 'react';
import { Stack } from 'expo-router';
import { useTheme } from '@/context/theme-context';
import { useOrganization } from '@/context/organization-context';

export default function AppLayout() {
  const { theme } = useTheme()
  const { organization } = useOrganization()

  return (
    <>
      {!organization ? (
        <Stack screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name='(no_organization)' options={{title: ''}}  />
        </Stack>
      ) : (
        <Stack screenOptions={{
          headerStyle: { backgroundColor: theme.background.primary}
        }}>
          <Stack.Screen name='(organization)' options={{title: '', headerShown: false}}  />
        </Stack>
      )}
    </>
  );
}
