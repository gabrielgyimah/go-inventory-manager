import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@/context/theme-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyledH3PrimaryText, StyledH4MutedText, StyledH4PrimaryText, StyledH5MutedText } from '../styled-components/style-texts';
import { StyledMutedBorderContainer } from '../styled-components/style-container';

interface BorderedButtonProps {
  title: string;
  onPressHandler: () => void;
  icon?: React.ReactNode;
  containerStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  TextStyle?: TextStyle
}

export default function BorderedButton({
  title,
  onPressHandler,
  icon,
  containerStyle,
  buttonStyle,
  TextStyle
}: BorderedButtonProps) {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { borderColor: theme.text.muted}, containerStyle]}>
      <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPressHandler}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <Text style={[styles.title, TextStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontWeight: '700',
  },
  iconContainer: {
    marginRight: 8, // Adjust the margin as needed
  },
});
