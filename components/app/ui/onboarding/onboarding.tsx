import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '@/context/theme-context';
import { StyledBodyMutedText, StyledH1PrimaryText, StyledH2PrimaryText, StyledH3MutedText, StyledH3PrimaryText, StyledH4PrimaryText, StyledH5PrimaryText } from '../styled-components/style-texts';
import OnBoardingIllustrationOne from '../svgs-as-icons/onboarding-illustration-1';
import Swiper from 'react-native-swiper';
import OnBoardingIllustrationTwo from '../svgs-as-icons/onboarding-illustration-2';
import OnBoardingIllustrationThree from '../svgs-as-icons/onboarding-illustration-3';
import OnBoardingIllustrationFour from '../svgs-as-icons/onboarding-illustration-4';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Link } from 'expo-router';

export default function Onboarding() {
  const { theme } = useTheme(); // Hook usage within the functional component body

  return (
    <View style={styles.container}>
      {/* Nested View */}
      <Swiper 
        horizontal loop autoplay showsPagination
        paginationStyle={{ 
          position: 'absolute', top: 40, height: 20,
          gap: 4, paddingHorizontal: 8
        }}
        dotStyle={{
          flex: 1,
          height: 6,
          backgroundColor: theme.text.muted,
        }}
        activeDotStyle={{
          backgroundColor: theme.status.valid,
          flex: 1,
          height: 6,
          margin: 0,
        }}
      >
        <View style={{ flex: 1,justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 30}}>
          <View style={{ padding: 12, maxWidth: 600, gap: 20, justifyContent: 'center', alignItems: 'center'}}>
            <OnBoardingIllustrationOne />
            <SectionDescription 
              textAlign='center' title='Instantly View inventory Data' 
              text='Access a comprehensive dashboard that provides real-time insights into all your products.'
            />
          </View>
        </View>

        <View style={{ flex: 1,justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 30}}>
          <View style={{ padding: 12, maxWidth: 600, gap: 20, justifyContent: 'center', alignItems: 'center'}}>
            <OnBoardingIllustrationTwo />
            <SectionDescription 
              textAlign='center' title='Control Inventory' 
              text='Easily identify which items are low or out of stock with stock updates'
            />
          </View>
        </View>

        <View style={{ flex: 1,justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 30}}>
          <View style={{ padding: 12, maxWidth: 600, gap: 20, justifyContent: 'center', alignItems: 'center'}}>
            <OnBoardingIllustrationThree />
            <SectionDescription 
              textAlign='center' title='Find Products in a Snap' 
              text='Save time and quickly find and collect products within your store.'
            />
          </View>
        </View>

        <View style={{ flex: 1,justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 30}}>
          <View style={{ padding: 12, maxWidth: 600, gap: 20, justifyContent: 'center', alignItems: 'center'}}>
            <OnBoardingIllustrationFour />
            <SectionDescription 
              textAlign='center' title='Detailed Transaction History' 
              text='Track every sale, return, and stock adjustment to keep a clear and detailed record of your store.'
            />
          </View>
        </View>
      </Swiper>
      <View style={{ 
        flexDirection: 'row', gap: 20, paddingBottom: 80, 
        paddingHorizontal: 12, justifyContent: 'space-between', 
        alignItems: 'center', maxWidth: 400,
      }}>
        <Link href='(auth)/signup' style={{ backgroundColor: theme.status.valid, padding: 16, borderRadius: 12, flex: 1, overflow: 'hidden'}}>
          <Text style={{ textAlign: 'center', fontWeight: '500', fontSize: 18, color: theme.others.white}}>Sign up</Text>
        </Link>
        <Link href='(auth)/login' style={{ borderColor: theme.status.valid, borderWidth: 1, padding: 16, borderRadius: 12, flex: 1, overflow: 'hidden'}}>
          <Text style={{ textAlign: 'center', fontWeight: '500', fontSize: 18, color: theme.status.valid}}>Login</Text>
        </Link>
      </View>
    </View>
  );
}

interface SectionDescriptionProps {
  textAlign?: string;
  title: string;
  text: string;
}

const SectionDescription = ({
  textAlign,
  title,
  text,
}: SectionDescriptionProps) => {
  return (
    <View style={{ gap: 8}}>
      <StyledH3MutedText textAlign={textAlign} text={title} />
      <StyledBodyMutedText textAlign={textAlign} 
        text={text}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
  }
});
