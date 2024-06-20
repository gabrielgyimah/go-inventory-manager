import React, { useEffect } from 'react';
import { Tabs, router } from 'expo-router';
import { useTheme } from '@/context/theme-context';
import InventoryIcon from '@/components/app/ui/svgs-as-icons/inventory-icon';
import DashboardIcon from '@/components/app/ui/svgs-as-icons/dashboard-icon';
import ReportsIcon from '@/components/app/ui/svgs-as-icons/reports-icon';
import SettingsIcon from '@/components/app/ui/svgs-as-icons/settings-icon';
import { useOrganization } from '@/context/organization-context';

export default function OrganizationLayout() {
  const { theme } = useTheme();
  const { organization } = useOrganization();

  useEffect(() => {
    if (!organization) {
      router.navigate('(no_organization)');
    }
  }, [organization]);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontSize: 14 },
        tabBarActiveTintColor: theme.status.valid,
        tabBarStyle: {
          paddingVertical: 8,
          paddingBottom: 4,
          gap: 8,
          backgroundColor: theme.background.primary
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <DashboardIcon color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="inventory"
        options={{
          title: 'Inventory',
          tabBarIcon: ({ color }) => <InventoryIcon color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: 'Report',
          tabBarIcon: ({ color }) => <ReportsIcon color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <SettingsIcon color={color} size={28} />,
        }}
      />
    </Tabs>
  );
}
