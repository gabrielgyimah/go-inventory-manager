import React, { useEffect } from 'react';
import { Stack, router } from 'expo-router';
import { useTheme } from '@/context/theme-context';
import { useOrganization } from '@/context/organization-context';

export default function NoOrganizationLayout() {
  const { theme } = useTheme();
  const { organization } = useOrganization();

  useEffect(() => {
    if (organization) {
      router.navigate('(organization)');
    }
  }, [organization]);

  return (
    <Stack screenOptions={{
      headerShown: false,
      headerStyle: { backgroundColor: theme.background.primary }
    }}>
      <Stack.Screen name='index' options={{ title: '' }} />
      <Stack.Screen name='create-organization' options={{ title: '', headerShown: true }} />
    </Stack>
  );
}
