import React, { useState, useRef, useCallback } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, NativeSyntheticEvent, TextInputChangeEventData, TextInputKeyPressEventData, Text, Alert, Button } from 'react-native';
import { Stack } from 'expo-router';
import { useTheme } from '@/context/theme-context';
import { StyledBodyMutedText } from '@/components/app/ui/styled-components/style-texts';
import AuthCard from '@/components/app/auth/auth-card';
import ThemeSettingsButton from '@/components/app/settings/theme-settings-button';
import Animated from 'react-native-reanimated';
import Countdown from '@/components/app/ui/count-down';
import { useAuth } from '@/context/auth-context';

const VerificationScreen: React.FC = () => {
  const { theme, primaryBackgroundColorAnimation } = useTheme();
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const [resetTime, setResetTime] = useState('0:59');
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const { signIn } = useAuth()

  const [showResendButton, setShowResendButton] = useState(false);

  const handleCountdownComplete = () => {
    setShowResendButton(true);
  };

  const handleResendButtonPress = () => {
    setShowResendButton(false);
  };

  const handleChange = useCallback((e: NativeSyntheticEvent<TextInputChangeEventData>, index: number) => {
    const text = e.nativeEvent.text.slice(0, 1); // Ensure only one character is taken
    setOtp(prevOtp => prevOtp.map((data, i) => (i === index ? text : data)));
    if (text && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  }, []);

  const handleDelete = useCallback((e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    if (e.nativeEvent.key === 'Backspace') {
      setOtp(prevOtp => prevOtp.map((data, i) => (i === index ? '' : data)));
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  }, []);

  const handleVerify = () => {
    signIn()
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen 
        options={{ 
          headerShown: true, headerTitle: '', headerBackTitle: '',
          headerStyle: { backgroundColor: theme.background.primary }
        }} 
      />
      <Animated.View style={[styles.container, primaryBackgroundColorAnimation]}>
        <AuthCard 
          title='Verification' 
          description='A 6 digit OTP was sent to your registered email address. Input here to continue' 
          navigationTitle='Not yet registered?'
          navigationLink='(auth)/signup'
        >
          <View style={{ flexDirection: 'row', gap: 8, backgroundColor: 'transparent' }}>
            {otp.map((d, i) => (
              <TextInput
                key={i}
                ref={ref => (inputRefs.current[i] = ref)} 
                style={[styles.input, { borderColor: theme.text.muted, color: theme.text.primary }]}
                value={d}
                maxLength={1}
                onKeyPress={(e) => handleDelete(e, i)}
                onChange={(e) => handleChange(e, i)}
                keyboardType='numeric'
              />
            ))}
          </View>
          {!showResendButton ? (
            <View style={{ backgroundColor: 'transparent', flexDirection: 'row' }}>
              <StyledBodyMutedText text='Resend Code In: ' />
              <Countdown durationInSeconds={60} onComplete={handleCountdownComplete} />
            </View>
          ) : (
            <View>
              {showResendButton && <Button title="Resend OTP" onPress={handleResendButtonPress} />}
            </View>
          )}
          <Button title="Verify" onPress={handleVerify} />
        </AuthCard>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 50,
    flex: 1,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
  },
});

export default VerificationScreen;
