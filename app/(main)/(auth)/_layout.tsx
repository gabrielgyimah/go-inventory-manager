import React from 'react';
import { Stack } from 'expo-router';
import { ThemeProvider } from '@/context/theme-context';

export default function AuthLayout() {
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          headerBackVisible: true,
        }}>
        <Stack.Screen
          name="index"
        />
        <Stack.Screen
          name="login"
        />
        <Stack.Screen
          name="signup"
        />
        <Stack.Screen
          name="verify"
        />
        <Stack.Screen
          name="terms-conditions"
        />
      </Stack>
    </ThemeProvider>
  );
}
