import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useAuth } from '@/context/auth-context';
import { useTheme } from '@/context/theme-context';
import InventoryIcon from '@/components/app/ui/svgs-as-icons/inventory-icon';
import DashboardIcon from '@/components/app/ui/svgs-as-icons/dashboard-icon';
import ReportsIcon from '@/components/app/ui/svgs-as-icons/reports-icon';
import SettingsIcon from '@/components/app/ui/svgs-as-icons/settings-icon';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function AppLayout() {
  const { isAuthenticated } = useAuth()
  const { theme, primaryBackgroundColorAnimation } = useTheme()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 14
        },
        tabBarActiveTintColor: theme.status.valid,
        tabBarStyle: {
          paddingVertical: 8,
          paddingBottom: 4,
          gap: 8, backgroundColor: theme.background.primary
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <DashboardIcon color={color}  size={28} />,
        }}
      />
      <Tabs.Screen
        name="inventory"
        options={{
          title: 'Inventory',
          tabBarIcon: ({ color }) => <InventoryIcon color={color}  size={28} />,
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: 'Report',
          tabBarIcon: ({ color }) => <ReportsIcon color={color}  size={28}/>,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <SettingsIcon color={color}  size={28} />,
        }}
      />
    </Tabs>
  );
}
