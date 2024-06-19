import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, ActivityIndicator, FlatList } from 'react-native';
import Animated from 'react-native-reanimated';
import { useTheme } from '@/context/theme-context';
import NoInviteIcon from '../../../components/app/ui/svgs-as-icons/no-invites';
import GreenButton from '@/components/app/ui/buttons/green-button';
import BorderedButton from '../../../components/app/ui/buttons/bordered-buttons';
import { useNavigation } from '@react-navigation/native';
import { useInvites } from '@/context/invites-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import AppIcons from '@/components/app/ui/icons/app-icons';

const InvitesScreen: React.FC = () => {
  const { theme, primaryBackgroundColorAnimation } = useTheme();
  const { invites, getInvites, acceptInvite, declineInvites } = useInvites();

  useEffect(() => {
    getInvites();
  }, []);


  const handleCreateOrganization = () => {
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[ styles.container ]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Invites</Text>
          <Text style={styles.headerDescription}>Check out the latest invites from businesses</Text>
        </View>
        {invites.length === 0 ? (
          <View style={styles.emptyContainer}>
            <AppIcons name='GreenEnvelope' />
            <Text style={styles.emptyText}>No invites available</Text>
            <GreenButton onPressHandler={handleCreateOrganization} title='Create Your Own Organization' />
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
                  <GreenButton title="Accept" onPressHandler={() => acceptInvite(item.id)} />
                  <BorderedButton title="Decline" onPressHandler={() => declineInvites(item.id)} />
                </View>
              </View>
            )}
          />
        )}
      </View>
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
});

export default InvitesScreen;
