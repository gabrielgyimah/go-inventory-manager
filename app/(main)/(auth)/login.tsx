import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import AuthCard from '@/components/app/auth/auth-card';
import { useTheme } from '@/context/theme-context';
import { Theme } from '@/interfaces/theme-interface';
import Animated from 'react-native-reanimated';
import MailIcon from '@/components/app/ui/svgs-as-icons/mail-icon';
import { StyledBodyMutedText, StyledBodyPrimaryText } from '@/components/app/ui/styled-components/style-texts';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';
import LockIcon from '@/components/app/ui/svgs-as-icons/lock-icon';
import { Link, router } from 'expo-router';
import GreenButton from '@/components/app/ui/buttons/green-button';
import SocialSignIns from '@/components/app/auth/social-sign-ins';
import ThemeSettingsButton from '@/components/app/settings/theme-settings-button';
import PhoneNumberInput from '@/components/app/ui/phone-number';
import React from 'react';

export default function LoginScreen() {
  const { theme, primaryBackgroundColorAnimation, borderMutedColorAnimation } = useTheme()
  const [showPassword, setShowPassword] = useState(false)
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [callingCode,  setCallingCode] = useState('');


  const submitLoginHandler = async () => {
    router.navigate('(auth)/verify')
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Animated.View style={[styles.container, primaryBackgroundColorAnimation]}>
        <AuthCard 
          title='Welcome Back' 
          description='View your store health with Go. Inventory'
          navigationTitle='Sign up'
          navigationDescrtiption='Not yet registered? '
          navigationLink='(auth)/signup'
        >
          <Animated.View style={[styles.inputContainer, borderMutedColorAnimation]}>
            <MailIcon />
            <Animated.View style={[styles.inputLabel, primaryBackgroundColorAnimation]}>
              <StyledBodyMutedText text='Email Address'/>
              <Ionicons size={8} name='star' color={theme.status.valid}/>
            </Animated.View>
            <TextInput 
              placeholder='Email Address'
              style={{
                flex: 1, color: theme.text.primary
              }}  
              placeholderTextColor={theme.text.muted} 
            />
          </Animated.View>

          {/** Password */}
          <Animated.View style={[styles.inputContainer, borderMutedColorAnimation]}>
            <LockIcon />
            <Animated.View style={[styles.inputLabel, primaryBackgroundColorAnimation]}>
              <StyledBodyMutedText text='Password'/>
              <Ionicons size={8} name='star' color={theme.status.valid}/>
            </Animated.View>
            <TextInput style={{
              flex: 1, color: theme.text.primary}} 
              secureTextEntry placeholderTextColor={theme.text.muted} 
              placeholder='**********'
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ width: 50, flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Ionicons name={showPassword ? 'eye' : 'eye-off'} color={theme.text.muted} size={24} />
            </TouchableOpacity>
          </Animated.View>

          <GreenButton onPressHandler={submitLoginHandler} title='Login up' />
          <SocialSignIns title='Login with' />
        </AuthCard>
      </Animated.View>
    </SafeAreaView>
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
    alignContent: 'center'
  },
  inputLabel: {
    flexDirection: 'row', gap: 3, alignItems: 'center', position: 'absolute', 
    top: -10, left: 20, paddingHorizontal: 8,
  }
});
