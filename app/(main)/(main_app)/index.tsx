import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList, ImageBackground } from 'react-native';
import { useTheme } from '@/context/theme-context';
import GreenButton from '@/components/app/ui/buttons/green-button';
import BorderedButton from '@/components/app/ui/buttons/bordered-buttons';
import { InviteInterface, InviteStatus, useInvites } from '@/context/invites-context';
import { StyledMutedBorderContainer, StyledMutedContainer, StyledPrimaryContainer } from '@/components/app/ui/styled-components/style-container';
import { StyledBodyMutedText, StyledH1PrimaryText, StyledH2PrimaryText, StyledH3MutedText, StyledH4PrimaryText } from '@/components/app/ui/styled-components/style-texts';
import AppIcons from '@/components/app/ui/icons/app-icons';
import { Stack, router } from 'expo-router';

// Mock invites data
const mockInvites: InviteInterface[] = [
  // {
  //   id: '1',
  //   organizationName: 'Tech Innovators',
  //   organizationImageUrl: 'https://images.pexels.com/photos/9561301/pexels-photo-9561301.jpeg?auto=compress&cs=tinysrgb&w=600',
  //   message: 'Join us to innovate the future of technology.',
  //   status: InviteStatus.PENDING,
  //   isActive: true,
  //   expiresIn: '2024-07-01T00:00:00Z',
  // },
  // {
  //   id: '2',
  //   organizationName: 'Health Solutions',
  //   organizationImageUrl: '',
  //   message: 'Be part of our mission to improve healthcare.',
  //   status: InviteStatus.ACCEPTED,
  //   isActive: false,
  //   expiresIn: '2024-08-15T00:00:00Z',
  // },
  // {
  //   id: '3',
  //   organizationName: 'Eco Warriors',
  //   organizationImageUrl: 'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=600',
  //   message: 'Help us make the world a greener place.',
  //   status: InviteStatus.PENDING,
  //   isActive: true,
  //   expiresIn: '2024-09-10T00:00:00Z',
  // },
  // {
  //   id: '4',
  //   organizationName: 'Tech Innovators',
  //   organizationImageUrl: 'https://images.pexels.com/photos/9561301/pexels-photo-9561301.jpeg?auto=compress&cs=tinysrgb&w=600',
  //   message: 'Join us to innovate the future of technology.',
  //   status: InviteStatus.PENDING,
  //   isActive: true,
  //   expiresIn: '2024-07-01T00:00:00Z',
  // },
  // {
  //   id: '5',
  //   organizationName: 'Health Solutions',
  //   organizationImageUrl: '',
  //   message: 'Be part of our mission to improve healthcare.',
  //   status: InviteStatus.ACCEPTED,
  //   isActive: false,
  //   expiresIn: '2024-08-15T00:00:00Z',
  // },
];

const InvitesScreen: React.FC = () => {
  const { invites, setInvites } = useInvites();

  useEffect(() => {
    setInvites(mockInvites);
  }, [setInvites]);

  const handleCreateOrganization = () => {
    router.navigate('create-organization');
  };

  return (
    <StyledPrimaryContainer style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View>
        <StyledH1PrimaryText text="Invites" />
        <StyledBodyMutedText text="Accept invites from organizations or create your own organization." />
      </View>
      {invites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <View style={styles.centeredContent}>
            <StyledMutedContainer style={styles.envelope}>
              <AppIcons name="GreenEnvelope" />
            </StyledMutedContainer>
            <View style={styles.emptyTextContainer}>
              <StyledH4PrimaryText text="No invites yet" textAlign="center" />
              <StyledBodyMutedText text="Start by creating your own organization" textAlign="center" />
            </View>
          </View>
        </View>
      ) : (
        <FlatList
          data={invites}
          contentContainerStyle={{ gap: 12 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <RenderInvite invite={item} />}
        />
      )}
      <GreenButton onPressHandler={handleCreateOrganization} title="Create organization" />
    </StyledPrimaryContainer>
  );
};

/**
 * Interface for RenderInvite props.
 */
export interface RenderInviteProps {
  /**
   * The invite object containing details of the invite.
   * @type {InviteInterface}
   */
  invite: InviteInterface;
}

/**
 * Component to render an invite item.
 * @param {RenderInviteProps} props
 */
const RenderInvite: React.FC<RenderInviteProps> = ({ invite }) => {
  const { acceptInvite, declineInvites } = useInvites();
  const { theme } = useTheme();
  
  return (
    <StyledMutedBorderContainer style={styles.inviteCard}>
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <RenderOrganizationImage invite={invite} />
        <View>
          <StyledH4PrimaryText text={invite.organizationName} />
          <StyledBodyMutedText text={invite.message} numberOfLines={4} ellipsizeMode="clip" />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <BorderedButton 
          containerStyle={{ flex: 1, borderColor: theme.status.danger }} 
          title="Decline" 
          onPressHandler={() => declineInvites(invite.id)} 
          TextStyle={{ color: theme.status.danger }}
        />
        <GreenButton 
          containerStyle={{ flex: 1 }} 
          title="Accept" 
          onPressHandler={() => acceptInvite(invite.id)} 
        />
      </View>
    </StyledMutedBorderContainer>
  );
};

/**
 * Interface for RenderOrganizationImage props.
 */
export interface RenderOrganizationImageProps {
  /**
   * The invite object containing details of the organization.
   * @type {InviteInterface}
   */
  invite: InviteInterface;
}

/**
 * Component to render the organization's image or initials if no image is available.
 * @param {RenderOrganizationImageProps} props
 */
const RenderOrganizationImage: React.FC<RenderOrganizationImageProps> = ({ invite }) => {
  const words = invite.organizationName.split(' ');
  const initials = words.map(word => word[0]).join('');

  return (
    <>
      {invite.organizationImageUrl ? (
        <ImageBackground source={{ uri: invite.organizationImageUrl }} style={styles.imageBackground} />
      ) : (
        <StyledMutedContainer style={styles.imageBackground}>
          <StyledH3MutedText text={initials} textAlign="center" />
        </StyledMutedContainer>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingBottom: 12,
    gap: 20,
    paddingTop: 32,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  envelope: {
    padding: 100,
    borderRadius: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTextContainer: {
    paddingVertical: 12,
    gap: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  inviteCard: {
    padding: 6,
    borderRadius: 18,
    gap: 12,
  },
  imageBackground: {
    width: 90,
    height: 90,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});

export default InvitesScreen;
