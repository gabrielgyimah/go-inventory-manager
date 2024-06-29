import React, { useState, FC } from 'react';
import { StyleSheet, TextInput, TextInputProps, View, ViewStyle, TextStyle } from 'react-native';
import { StyledBodyPrimaryText } from '@/components/app/ui/styled-components/style-texts';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/context/theme-context';
import { StyledMutedBorderContainer } from './style-container';

interface FloatingLabelInputProps extends TextInputProps {
  label: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  required?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const FloatingLabelInput: FC<FloatingLabelInputProps> = ({
  label,
  containerStyle,
  inputStyle,
  required,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <StyledMutedBorderContainer style={[styles.inputContainer, containerStyle]}>
      {leftIcon}
      {(isFocused || props.value) && (
        <View style={[styles.inputLabelContainer, { backgroundColor: theme.background.primary }]}>
          <StyledBodyPrimaryText text={label} style={{zIndex: 1}} />
          {required && <Ionicons size={8} name="star" color={theme.status.valid} />}
        </View>
      )}
      <TextInput
        {...props}
        placeholder={isFocused ? '' : label}
        style={[{ flex: 1, color: theme.text.primary }, inputStyle]}
        placeholderTextColor={theme.text.muted}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {rightIcon}
    </StyledMutedBorderContainer>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    alignContent: 'center',
  },
  inputLabelContainer: {
    position: 'absolute',
    top: -10,
    left: 20,
    paddingHorizontal: 8,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default FloatingLabelInput;
