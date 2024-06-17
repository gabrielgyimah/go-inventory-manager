import { useTheme } from '@/context/theme-context';
import { Ionicons } from '@expo/vector-icons';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, {useState, useRef, forwardRef, useMemo} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import CustomBottomSheet from './custom-bottom-sheet';
import Animated from 'react-native-reanimated';
import { StyledBodyMutedText } from './styled-components/style-texts';

export interface PhoneNumberInputProps {
  countryCode: string;
  setCountryCode: React.Dispatch<React.SetStateAction<string>>;
  areaCode: string;
  setAreaCode: React.Dispatch<React.SetStateAction<string>>;
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
}

const PhoneNumberInput = ({
  countryCode, 
  setCountryCode, 
  setAreaCode, 
  phoneNumber, 
  areaCode, 
  setPhoneNumber
}: PhoneNumberInputProps) => {
  const {theme, primaryBackgroundColorAnimation} = useTheme()

  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);

  const bottomSheetRef = useRef<BottomSheetModal | null>(null)
  const openBottomSheet = () => bottomSheetRef.current?.present()
  const closeBottomSheet = () => bottomSheetRef.current?.close()
  const bottomSheetSnapPoints = useMemo(() => ['56%'], [])

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 18,
      borderRadius: 12
    },
    wrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 12
      // backgroundColor: 'red'
    },
    button: {
      marginTop: 20,
      height: 46,
      width: 328,
      borderRadius: 10,
      marginHorizontal: 16,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: theme.text.muted,
      borderWidth: StyleSheet.hairlineWidth,
      shadowColor: 'rgba(0,0,0,0.4)',
      shadowOffset: {
        width: 1,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
    },
    buttonText:{
      color: theme.text.primary,
      fontSize: 14,
    },
    message: {
      padding: 16,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.text.muted,
      borderRadius: 12,
      width: 328,
      marginBottom: 16,
    },
    inputLabel: {
      flexDirection: 'row', gap: 3, alignItems: 'center', position: 'absolute', 
      top: -18, left: 8, paddingHorizontal: 8,
    }
  });

  return (
    <>
      <TouchableOpacity onPress={openBottomSheet} style={{ flexDirection: 'row', flex: 1, gap: 8}}>
        <View style={{ 
          backgroundColor: theme.others.accent, justifyContent: 'center', 
          alignItems: 'center', borderRadius: 10, overflow: 'hidden', height: 28, width: 28}}>
            <Ionicons name='call-outline' size={20} color={theme.others.white} />
        </View>
        <Animated.View style={[styles.inputLabel, primaryBackgroundColorAnimation]}>
          <StyledBodyMutedText text='Phone Number'/>
          <Ionicons size={8} name='star' color={theme.status.valid}/>
        </Animated.View>
        <View style={{ flexDirection: 'row', gap: 8, justifyContent: 'space-between', alignItems: 'center', flex: 1}}>
          <View style={{ flex: 1}}>
            <Text style={{ color: theme.text.primary}}>{countryCode ? countryCode : 'US'}</Text>
            <Text style={{ color: theme.text.muted}}>
              {areaCode ? areaCode : '+1'} {phoneNumber || '971 182 178'}
            </Text>
          </View>
          <Ionicons name='chevron-forward-outline' size={14} color={theme.text.muted} />
        </View>
      </TouchableOpacity>

      <CustomBottomSheet customDetached snapPoints={bottomSheetSnapPoints}  ref={bottomSheetRef}>
        <Animated.View style={[styles.container, { backgroundColor: theme.background.primary}]}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="US"
            layout="first"
            textContainerStyle={{backgroundColor: theme.background.primary, borderColor: theme.text.muted,
              borderRadius: 12,
              borderWidth: StyleSheet.hairlineWidth}}
            codeTextStyle={{color: theme.text.primary}}
            countryPickerButtonStyle={{borderColor: theme.text.muted,
              borderRadius: 12,
              backgroundColor: theme.background.primary,
              borderWidth: StyleSheet.hairlineWidth}}
            textInputStyle={{color: theme.text.primary}}
            containerStyle={{gap: 8, flex: 1, backgroundColor: theme.background.primary}}
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
              setCountryCode(phoneInput.current?.getCountryCode() || '');
            }}
            countryPickerProps={{withAlphaFilter:true}}
            disabled={disabled}
            withDarkTheme
            withShadow
            autoFocus
            onChangeCountry={(cnt) => {}}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setShowMessage(true)
              const checkValid = phoneInput.current?.isValidNumber(value);
              setValid(checkValid ? checkValid : false);
              if (!checkValid) {Alert.alert('Phone number is not valid')} else {
                setCountryCode(phoneInput.current?.getCountryCode() || '');
                const areaCode = phoneInput.current?.getCallingCode()
                setAreaCode(areaCode!)
                const getNumberAfterPossiblyEliminatingZero = phoneInput.current?.getNumberAfterPossiblyEliminatingZero();
                setPhoneNumber(getNumberAfterPossiblyEliminatingZero?.number!)
                closeBottomSheet()
              }
            }}>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableOpacity>
        </Animated.View>
      </CustomBottomSheet >
    </>
  );
};


export default PhoneNumberInput;