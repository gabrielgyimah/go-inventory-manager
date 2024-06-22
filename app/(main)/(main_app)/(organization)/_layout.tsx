import React, { useEffect, useState } from 'react';
import { Tabs, router } from 'expo-router'; // Assuming `router` and other imports are correct
import { useTheme } from '@/context/theme-context';
import InventoryIcon from '@/components/app/ui/icons/icons/inventory-icon';
import DashboardIcon from '@/components/app/ui/svgs-as-icons/dashboard-icon';
import ReportsIcon from '@/components/app/ui/svgs-as-icons/reports-icon';
import SettingsIcon from '@/components/app/ui/svgs-as-icons/settings-icon';
import { Animated, Modal, Pressable, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StyledBodyPrimaryText } from '@/components/app/ui/styled-components/style-texts';
import { useOrganization } from '@/context/organization-context';
import HomeIcon from '@/components/app/ui/icons/icons/home-icon';

const CustomLayout = ({ children }) => {
  const { theme, mode } = useTheme();

  const [modalVisible, setModalVisible] = useState(false);
  const slideAnim = new Animated.Value(0);

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
    });
  };

  const translateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0],
  });

  return (
    <View style={{ flex: 1 }}>
      {children}

      {/* Button to open modal */}
      <View style={styles.addButtonContainer}>
        <TouchableOpacity
          onPress={openModal}
          style={{
            backgroundColor: theme.status.valid,
            padding: 10,
            borderRadius: 12,
          }}
        >
          <Ionicons name='add' size={24} color={theme.background.primary} />
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={[styles.modalOverlay, { backgroundColor: mode === 'light' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(200, 200, 200, 0.1)'}]}>
            <TouchableWithoutFeedback>
              <View style={[styles.modalContent, {  backgroundColor: theme.background.primary}]}>
                <View style={{ alignItems: 'center', position: 'absolute', top: -20, left: '48%' }}>
                  <Pressable
                    onPress={closeModal}
                    style={{
                      backgroundColor: theme.status.valid,
                      padding: 10,
                      borderRadius: 12,
                    }}
                  >
                    <Ionicons name='close-outline' size={24} color={theme.background.primary} />
                  </Pressable>
                </View>
                <TouchableOpacity style={styles.sheetButton}>
                  <Ionicons name='add' size={24} color={theme.text.primary} style={[styles.sheetIcon, { borderColor: theme.text.primary, padding: 3.2}]} />
                  <StyledBodyPrimaryText text='Add Product'/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sheetButton}>
                  <Ionicons name='arrow-up-outline' size={16} color={theme.text.primary} style={[styles.sheetIcon, { borderColor: theme.text.primary}]} />
                  <StyledBodyPrimaryText text='Add Sale'/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sheetButton}>
                  <Ionicons name='arrow-down-outline' size={16} color={theme.text.primary} style={[styles.sheetIcon, { borderColor: theme.text.primary}]} />
                  <StyledBodyPrimaryText text='Add Stock'/>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default function OrganizationLayout() {
  const { theme } = useTheme();
  const { organization } = useOrganization(); // Assuming this hook is correctly implemented

  useEffect(() => {
    if (!organization) {
      router.navigate('(no_organization)');
    }
  }, [organization]);

  return (
    <CustomLayout>
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
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <HomeIcon color={color} size={28} />,
          }}
        />
        <Tabs.Screen
          name="inventory"
          options={{
            title: 'Inventory',
            tabBarItemStyle: { marginRight: 14},
            tabBarIcon: ({ color }) => <InventoryIcon color={color} size={28} />,
          }}
        />
        <Tabs.Screen
          name="reports"
          options={{
            title: 'Reports',
            tabBarItemStyle: { marginLeft: 14},
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
    </CustomLayout>
  );
}

const styles = StyleSheet.create({
  addButtonContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 30,
    alignItems: 'center',
  },
  sheetButton: {
    alignItems: 'center',
    padding: 10,
    gap: 6,
  },
  sheetIcon: {
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 1,
    padding: 7,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    paddingTop: 32,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});
