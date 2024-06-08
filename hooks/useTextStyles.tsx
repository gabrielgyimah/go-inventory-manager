import { useTheme } from "@/context/theme-context";
import { StyleSheet } from "react-native";

const useTextStyles = () => {
  const { 
    theme, 
    primaryTextColorAnimation,
    secondaryTextColorAnimation,
    mutedTextColorAnimation
  } = useTheme();

  const textStyles = StyleSheet.create({
    // Heading styles
    heading1: {
      fontSize: 32,
      fontWeight: "bold",
      color: theme.text.primary,
    },
    heading1Muted: {
      fontSize: 32,
      fontWeight: "bold",
      color: theme.text.muted,
    },
    heading2: {
      fontSize: 28,
      fontWeight: "bold",
      color: theme.text.primary,
    },
    heading2Muted: {
      fontSize: 28,
      fontWeight: "bold",
      color: theme.text.muted,
    },
    heading3: {
      fontSize: 24,
      fontWeight: "bold",
      color: theme.text.primary,
    },
    heading3Muted: {
      fontSize: 24,
      fontWeight: "bold",
      color: theme.text.muted,
    },
    
    body: {
      fontSize: 16,
      color: theme.text.primary,
    },
    bodyMuted: {
      fontSize: 16,
      color: theme.text.muted,
    },
    bodyBold: {
      fontSize: 16,
      fontWeight: "bold",
      color: theme.text.primary,
    },
    bodyBoldMuted: {
      fontSize: 16,
      fontWeight: "bold",
      color: theme.text.muted,
    },
    
    caption: {
      fontSize: 12,
      color: theme.text.secondary,
    },
    captionMuted: {
      fontSize: 12,
      color: theme.text.muted,
    },
    
    button: {
      fontSize: 16,
      fontWeight: "bold",
      color: theme.text.primary,
    },
    buttonMuted: {
      fontSize: 16,
      fontWeight: "bold",
      color: theme.text.muted,
    },
    
    bottomSheetHead: {
      fontSize: 22,
      fontWeight: "700",
      color: theme.others.white,
    },
  });

  return {
    ...textStyles,
    primaryTextColor: {
      color: primaryTextColorAnimation ? primaryTextColorAnimation.color : theme.text.primary,
    },
    secondaryTextColor: {
      color: secondaryTextColorAnimation ? secondaryTextColorAnimation.color : theme.text.secondary,
    },
    mutedTextColor: {
      color: mutedTextColorAnimation ? mutedTextColorAnimation.color : theme.text.muted,
    },
  };
};

export { useTextStyles };
