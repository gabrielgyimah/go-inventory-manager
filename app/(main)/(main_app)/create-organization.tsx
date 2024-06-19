import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, ActivityIndicator, TextInput, Button, Image } from 'react-native';
import { Stack } from 'expo-router';
import { useTheme } from '@/context/theme-context';
import Animated from 'react-native-reanimated';
import { useInvites } from '@/context/invites-context';
import GreenButton from '@/components/app/ui/buttons/green-button';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const CreateOrganizationScreen: React.FC = () => {
    return(
        <Animated.View></Animated.View>
    )
};
export default CreateOrganizationScreen