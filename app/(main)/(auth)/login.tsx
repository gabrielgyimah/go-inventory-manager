import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { View } from '@/components/Themed';
import AuthCard from '@/components/app/auth/auth-card';
import { useTheme } from '@/context/theme-context';
import MailIcon from '@/components/app/ui/svgs-as-icons/mail-icon';
import { StyledBodyMutedText } from '@/components/app/ui/styled-components/style-texts';
import { Ionicons } from '@expo/vector-icons';
import LockIcon from '@/components/app/ui/svgs-as-icons/lock-icon';
import { Link, router } from 'expo-router';
import GreenButton from '@/components/app/ui/buttons/green-button';
import SocialSignIns from '@/components/app/auth/social-sign-ins';
import { StyledMutedBorderContainer, StyledPrimaryContainer } from '@/components/app/ui/styled-components/style-container';

export default function LoginScreen() {
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const submitLoginHandler = async () => {
    router.navigate('(auth)/verify');
  };

  return (
    <StyledPrimaryContainer style={{ flex: 1 }}>
      <View style={styles.container}>
        <AuthCard
          title="Welcome Back"
          description="View your store health with Go. Inventory"
          navigationTitle="Sign up"
          navigationDescrtiption="Not yet registered? "
          navigationLink="(auth)/signup"
        >
          <StyledMutedBorderContainer style={styles.inputContainer}>
            <MailIcon />
            {(isEmailFocused || email) && (
              <View style={styles.inputLabel}>
                <StyledBodyMutedText text="Email Address" />
                <Ionicons size={8} name="star" color={theme.status.valid} />
              </View>
            )}
            <TextInput
              placeholder={isEmailFocused ? '' : 'Email Address'}
              style={{ flex: 1, color: theme.text.primary }}
              placeholderTextColor={theme.text.muted}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
            />
          </StyledMutedBorderContainer>

          <StyledMutedBorderContainer style={styles.inputContainer}>
            <LockIcon />
            {(isPasswordFocused || password) && (
              <View style={styles.inputLabel}>
                <StyledBodyMutedText text="Password" />
                <Ionicons size={8} name="star" color={theme.status.valid} />
              </View>
            )}
            <TextInput
              style={{ flex: 1, color: theme.text.primary }}
              secureTextEntry={!showPassword}
              placeholder={isPasswordFocused ? '' : '**********'}
              placeholderTextColor={theme.text.muted}
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={{ width: 50, flexDirection: 'row', justifyContent: 'flex-end' }}
              accessibilityLabel={showPassword ? 'Hide password' : 'Show password'}
            >
              <Ionicons name={showPassword ? 'eye' : 'eye-off'} color={theme.text.muted} size={24} />
            </TouchableOpacity>
          </StyledMutedBorderContainer>

          <GreenButton onPressHandler={submitLoginHandler} title="Login up" />
          <SocialSignIns title="Login with" />
        </AuthCard>
      </View>
    </StyledPrimaryContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    alignContent: 'center',
  },
  inputLabel: {
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
    position: 'absolute',
    top: -10,
    left: 20,
    paddingHorizontal: 8,
  },
});
