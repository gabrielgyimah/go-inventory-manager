import React from 'react';
import { StyleSheet } from 'react-native';

import Onboarding from '@/components/app/ui/onboarding/onboarding';
import { StyledPrimaryContainer } from '@/components/app/ui/styled-components/style-container';

export default function AuthOnBoardingScreen() {
  return (
    <StyledPrimaryContainer style={styles.container}>
      <Onboarding />
    </StyledPrimaryContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
