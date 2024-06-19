import { useTheme } from "@/context/theme-context";
import React from "react";
import { Animated as RNAnimated, View, ViewStyle, StyleProp, StyleSheet } from "react-native";
import Animated from 'react-native-reanimated'

/**
 * Props for the BaseContainer component.
 */
interface BaseContainerProps {
  /** The children to be rendered inside the container. */
  children: React.ReactNode;
  /** Additional styles for the container. */
  style?: StyleProp<ViewStyle>;
}

/**
 * A base container component that applies animated background color styles.
 *
 * @param {BaseContainerProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
const BaseContainer = ({
  children,
  style,
}: BaseContainerProps): JSX.Element => {
  return (
    <Animated.View style={[style]}>
      {children}
    </Animated.View>
  );
};

/**
 * Props for the container components.
 */
interface ContainerProps {
  /** The children to be rendered inside the container. */
  children: React.ReactNode;
  /** Additional styles for the container. */
  style?: StyleProp<ViewStyle>;
}

/**
 * A container component with primary background color animation.
 *
 * @param {ContainerProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
const StyledPrimaryContainer = ({
  children,
  style,
}: ContainerProps): JSX.Element => {
  const { theme } = useTheme();
  return (
    <BaseContainer style={[{backgroundColor: theme.background.primary}, style]}>
      {children}
    </BaseContainer>
  );
};

/**
 * A container component with secondary background color animation.
 *
 * @param {ContainerProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
const StyledSecondaryContainer = ({
  children,
  style,
}: ContainerProps): JSX.Element => {
  const { theme } = useTheme();
  return (
    <BaseContainer style={[{backgroundColor: theme.background.secondary}, style]}>
      {children}
    </BaseContainer>
  );
};

/**
 * A container component with Muted background color animation.
 *
 * @param {ContainerProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
const StyledMutedContainer = ({
  children,
  style,
}: ContainerProps): JSX.Element => {
  const { theme } = useTheme();
  return (
    <BaseContainer style={[{backgroundColor: theme.text.muted}, style]}>
      {children}
    </BaseContainer>
  );
};
/**
 * A container component with muted border color animation.
 *
 * @param {ContainerProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
const StyledMutedBorderContainer = ({
  children,
  style,
}: ContainerProps): JSX.Element => {
  const { theme } = useTheme();
  return (
    <BaseContainer
      style={[{ borderColor: theme.text.muted, borderRadius: 12, borderWidth: 1}, style]}
    >
      {children}
    </BaseContainer>
  );
};

export {
  StyledPrimaryContainer,
  StyledSecondaryContainer,
  StyledMutedBorderContainer,
  StyledMutedContainer
};
