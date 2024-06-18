import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, ActivityIndicator, FlatList, Button, Image } from 'react-native';
import { Stack } from 'expo-router';
import { useTheme } from '@/context/theme-context';
import Animated from 'react-native-reanimated';
import { useInvites } from '@/context/invites-context';
import NoInviteIcon from '../ui/svgs-as-icons/no-invites';
import { TouchableOpacity } from 'react-native-gesture-handler';


const InvitesScreen: React.FC = () => {
  const { theme, primaryBackgroundColorAnimation } = useTheme();
  const { invites, loading, error, getInvites, acceptInvite, declineInvites } = useInvites();

  useEffect(() => {
    getInvites();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={[styles.container, primaryBackgroundColorAnimation]}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={[styles.container, primaryBackgroundColorAnimation]}>
        <Text style={styles.errorText}>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen 
        options={{ 
          headerShown: true, headerTitle: 'Invites', headerBackTitle: '',
          headerStyle: { backgroundColor: theme.background.primary }
        }} 
      />
      <Animated.View style={[styles.container, primaryBackgroundColorAnimation]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Invites</Text>
          <Text style={styles.headerDescription}>Check out the latest invites from businesses</Text>
        </View>
        {invites.length === 0 ? (
          <View style={styles.emptyContainer}>
            <NoInviteIcon width={200} height={200} style={styles.emptyImage} />
            <Text style={styles.emptyText}>No invites available</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Create Your Own Inventory</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            data={invites}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.inviteCard}>
                <Text style={styles.inviteText}>{item.businessName}</Text>
                <Text style={styles.inviteText}>{item.message}</Text>
                <View style={styles.buttonContainer}>
                  <Button title="Accept" onPress={() => acceptInvite(item.id)} />
                  <Button title="Decline" onPress={() => declineInvites(item.id)} />
                </View>
              </View>
            )}
          />
        )}
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerContainer: {
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerDescription: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
  },
  inviteCard: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
  },
  inviteText: {
    fontSize: 16,
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InvitesScreen;
