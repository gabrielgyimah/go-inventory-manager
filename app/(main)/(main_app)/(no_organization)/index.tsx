import React, { useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet, View, FlatList, ImageBackground } from 'react-native';
import { useTheme } from '@/context/theme-context';
import GreenButton from '@/components/app/ui/buttons/green-button';
import BorderedButton from '@/components/app/ui/buttons/bordered-buttons';
import { InviteInterface, InviteStatus, useInvites } from '@/context/invites-context';
import { StyledMutedBorderContainer, StyledMutedContainer, StyledPrimaryContainer } from '@/components/app/ui/styled-components/style-container';
import { StyledBodyMutedText, StyledH1PrimaryText, StyledH2PrimaryText, StyledH3MutedText, StyledH3PrimaryText, StyledH4PrimaryText } from '@/components/app/ui/styled-components/style-texts';
import AppIcons from '@/components/app/ui/icons/app-icons';
import { Stack, router } from 'expo-router';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import CustomBottomSheet from '@/components/app/ui/custom-bottom-sheet';
import Spinner from '@/components/app/animation/spinner-animation';
import CompletedAnimation from '@/components/app/animation/completed-animation';

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
];

const InvitesScreen: React.FC = () => {
  const { invites, setInvites } = useInvites();
  const { theme } = useTheme();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isPending, setIsPending] = useState(false);
  
  const bottomSheet = useRef<BottomSheetModal | null>(null);
  const snapPoints = useMemo(() => ['50%'], []);
  const openBottomSheet = () => bottomSheet.current?.present();
  const closeBottomSheet = () => bottomSheet.current?.close();

  useEffect(() => {
    setInvites(mockInvites);
  }, [setInvites]);

  const handleCreateOrganization = () => {
    router.navigate('create-organization');
  };

  const handleAcceptSubmit = () => {
    try {
      console.log('Submitting acceptance');
      setIsPending(true);
      openBottomSheet();
      setErrorMessage('');
      setSuccessMessage('');
      setTimeout(() => {
        console.log('Timeout completed');
        setIsPending(false); // Ensure this line is executed after the timeout
      }, 6000);
    } catch (error) {
      console.error('Error handling acceptance:', error);
    }
  };

  return (
    <>
      <StyledPrimaryContainer style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />
        <View>
          <StyledH1PrimaryText text="Invites" />
          <StyledBodyMutedText text="Accept invites from organizations or create your own organization." />
        </View>
        {invites.length === 0 ? (
          <View style={styles.emptyContainer}>
            <View style={styles.centeredContent}>
              <StyledMutedContainer style={[styles.envelope, { backgroundColor: theme.text.mutedLight}]}>
                <AppIcons name="GreenEnvelope" />
              </StyledMutedContainer>
              <View style={styles.emptyTextContainer}>
                <StyledH4PrimaryText text="No invites yet" style={{textAlign: 'center'}} />
                <StyledBodyMutedText text="Start by creating your own organization" style={{textAlign: 'center'}} />
              </View>
            </View>
          </View>
        ) : (
          <FlatList
            data={invites}
            contentContainerStyle={{ gap: 12 }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <RenderInvite handleAcceptInvite={handleAcceptSubmit} invite={item} />}
          />
        )}
        <GreenButton onPressHandler={handleCreateOrganization} title="Create organization" />
      </StyledPrimaryContainer>

      <CustomBottomSheet 
        snapPoints={snapPoints} 
        ref={bottomSheet}
        isPanDownToCloseEnabled={!isPending}
        customBackgroundColor={theme.background.primary}
      >
        <View style={styles.bottomSheetContainer}>
          {isPending ? (
            <View style={{ width: '100%', gap: 60}}>
              <Spinner color={theme.status.valid} />
              <StyledH4PrimaryText text='Processing' style={{textAlign: 'center'}} />
            </View>
          ) : (
            <View style={{ width: '100%', gap: 60}}>
              <CompletedAnimation color={theme.status.valid} />
              <GreenButton containerStyle={{ flex: 1}} title='Go to store' onPressHandler={() => (<></>)}/>
            </View>
          )}
        </View>
      </CustomBottomSheet>
    </>
  );
};

export interface RenderInviteProps {
  invite: InviteInterface;
  handleAcceptInvite: () => void;
}

const RenderInvite: React.FC<RenderInviteProps> = ({ invite, handleAcceptInvite }) => {
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
          onPressHandler={handleAcceptInvite} 
        />
      </View>
    </StyledMutedBorderContainer>
  );
};

export interface RenderOrganizationImageProps {
  invite: InviteInterface;
}

const RenderOrganizationImage: React.FC<RenderOrganizationImageProps> = ({ invite }) => {
  const words = invite.organizationName.split(' ');
  const initials = words.map(word => word[0]).join('');

  return (
    <>
      {invite.organizationImageUrl ? (
        <ImageBackground source={{ uri: invite.organizationImageUrl }} style={styles.imageBackground} />
      ) : (
        <StyledMutedContainer style={styles.imageBackground}>
          <StyledH3PrimaryText text={initials} style={{textAlign: 'center'}} />
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
  bottomSheetContainer: {
    paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
  },
});

export default InvitesScreen;