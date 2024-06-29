import { Stack } from "expo-router";
import React from "react";

export default function OrganizationStackLayout() {
  return (
    <Stack>
      <Stack.Screen name='add-new-category' />
      <Stack.Screen name='add-new-item' />
      <Stack.Screen name='scanner' />
      <Stack.Screen name='search-results' />
    </Stack>
  )
}