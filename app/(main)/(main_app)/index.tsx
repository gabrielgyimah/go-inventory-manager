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
import { router } from 'expo-router';
import { StyledMutedContainer, StyledPrimaryContainer } from '@/components/app/ui/styled-components/style-container';
import { StyledBodyMutedText, StyledH1PrimaryText, StyledH2PrimaryText } from '@/components/app/ui/styled-components/style-texts';

const InvitesScreen: React.FC = () => {
  const { theme, primaryBackgroundColorAnimation } = useTheme();
  const { invites, getInvites, acceptInvite, declineInvites } = useInvites();

  useEffect(() => {
    getInvites();
  }, []);


  const handleCreateOrganization = () => {
    router.navigate('create-organization')
  };

  return (
    <StyledPrimaryContainer style={{ flex: 1 }}>
      <View style={[styles.container]}>
        <View style={styles.headerContainer}>
          <StyledH1PrimaryText  text='Invites' />
          <StyledBodyMutedText text='View invites from team members to join their inventory system'/>
        </View>
        {invites.length === 0 ? (
          <View style={styles.emptyContainer}>
            <StyledMutedContainer style={styles.envelope}><AppIcons name='GreenEnvelope' /></StyledMutedContainer>
            <Text style={styles.emptyText}>No invites available</Text>
            <GreenButton onPressHandler={handleCreateOrganization} title='Create Your Own Organization' />
          </View>
        ) : (
          <FlatList
            data={invites}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.inviteCard}>
                <StyledH2PrimaryText text={item.businessName}/>
                <StyledBodyMutedText text={item.message} />
                <View style={styles.buttonContainer}>
                  <GreenButton title="Accept" onPressHandler={() => acceptInvite(item.id)} />
                  <BorderedButton title="Decline" onPressHandler={() => declineInvites(item.id)} />
                </View>
              </View>
            )}
          />
        )}
      </StyledPrimaryContainer>
  );
};

const styles = StyleSheet.create({
  envelope:{
    padding: 60,
    borderRadius: 500,
    justifyContent: 'center',
    flex: 0.3
  },
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
