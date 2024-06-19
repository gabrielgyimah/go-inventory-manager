import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import { Link, router } from 'expo-router';
import { useTheme } from '@/context/theme-context';
import { Text, View } from '@/components/Themed';
import AuthCard from '@/components/app/auth/auth-card';
import MailIcon from '@/components/app/ui/svgs-as-icons/mail-icon';
import LockIcon from '@/components/app/ui/svgs-as-icons/lock-icon';
import PhoneNumberInput from '@/components/app/ui/phone-number';
import GreenButton from '@/components/app/ui/buttons/green-button';
import SocialSignIns from '@/components/app/auth/social-sign-ins';
import { StyledBodyMutedText, StyledBodyPrimaryText } from '@/components/app/ui/styled-components/style-texts';
import { StyledMutedBorderContainer, StyledPrimaryContainer } from '@/components/app/ui/styled-components/style-container';

export default function SignupScreen() {
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [callingCode, setCallingCode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitSignupHandler = async () => {
    // Add form validation logic here
    if (!email || !phoneNumber || !password) {
      alert('Please fill out all fields.');
      return;
    }

    // If valid, navigate to the verification screen
    router.navigate('(auth)/verify');
  };

  return (
    <StyledPrimaryContainer style={{ flex: 1 }}>
      <View style={[styles.container]}>
        <AuthCard 
          title='Welcome to Go. Inventory' 
          description='Let’s get you started on your inventory system' 
          navigationTitle='Login'
          navigationDescrtiption='Already registered? '
          navigationLink='(auth)/login'
        >
          <StyledMutedBorderContainer style={[styles.inputContainer]}>
            <MailIcon />
            <View style={[styles.inputLabel]}>
              <StyledBodyMutedText text='Email Address' />
              <Ionicons size={8} name='star' color={theme.status.valid}/>
            </View>
            <TextInput 
              placeholder='Email Address'
              style={{ flex: 1, color: theme.text.primary }}  
              placeholderTextColor={theme.text.muted}
              value={email}
              onChangeText={setEmail}
              keyboardType='email-address'
              autoCapitalize='none'
            />
          </StyledMutedBorderContainer>

          {/** Phone Number */}
          <StyledMutedBorderContainer style={[styles.inputContainer]}>
            <PhoneNumberInput 
              areaCode={callingCode}
              countryCode={countryCode} 
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              setAreaCode={setCallingCode}
              setCountryCode={setCountryCode}
            />
          </StyledMutedBorderContainer>

          {/** Password */}
          <StyledMutedBorderContainer style={[styles.inputContainer]}>
            <LockIcon />
            <View style={[styles.inputLabel]}>
              <StyledBodyMutedText text='Password'/>
              <Ionicons size={8} name='star' color={theme.status.valid}/>
            </View>
            <TextInput 
              style={{ flex: 1, color: theme.text.primary }} 
              secureTextEntry={!showPassword} 
              placeholder='**********' 
              placeholderTextColor={theme.text.muted}
              value={password}
              onChangeText={setPassword}
              autoCapitalize='none'
            />
            <TouchableOpacity 
              onPress={() => setShowPassword(!showPassword)} 
              style={{ width: 50, flexDirection: 'row', justifyContent: 'flex-end' }}
              accessibilityLabel={showPassword ? 'Hide password' : 'Show password'}
            >
              <Ionicons name={showPassword ? 'eye' : 'eye-off'} color={theme.text.muted} size={24} />
            </TouchableOpacity>
          </StyledMutedBorderContainer>

          {/** Terms and Conditions */}
          <Link href='/terms-conditions' style={{ flexDirection: 'row' }}>
            <StyledBodyMutedText text='By continuing, you agree to our ' />
            <Text style={{ color: theme.status.valid, fontWeight: '700' }}>Terms & Conditions</Text>
            <StyledBodyMutedText text=' and ' />
            <Text style={{ color: theme.status.valid, fontWeight: '700' }}>Privacy Policy</Text>
          </Link>

          <GreenButton onPressHandler={submitSignupHandler} title='Sign up' />
          <SocialSignIns title='Sign up with' />
        </AuthCard>
      </View>
    </StyledPrimaryContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    alignContent: 'center',
    marginBottom: 15,
  },
  inputLabel: {
    flexDirection: 'row', gap: 3, alignItems: 'center', position: 'absolute', 
    top: -10, left: 20, paddingHorizontal: 8,
  },
});
