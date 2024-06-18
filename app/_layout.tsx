import { Slot } from 'expo-router';
import 'react-native-reanimated';
import React from 'react';

import { ThemeProvider } from '@/context/theme-context';
import { AuthProvider } from '@/context/auth-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { AppIconProvider } from '@/context/app-icon-context';

export default function RootLayout() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <GestureHandlerRootView>
          <AppIconProvider>
            <BottomSheetModalProvider>
              <Slot />
            </BottomSheetModalProvider>
          </AppIconProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </AuthProvider>
  );
}
