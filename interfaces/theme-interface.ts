import { Animated } from "react-native";

export interface Theme {
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    muted: string;
    mutedLight: string;
  };
  status: {
    valid: string;
    danger: string;
  };
  others: {
    accent: string;
    tint: string;
    black: string;
    white: string;
    gold: string;
    purple: string;
    skyBlue: string;
  };
}

export type ThemeMode = 'light' | 'dark' // | 'auto';

export interface ThemeContextType {
  theme: Theme;
  mode: ThemeMode;
  setDarkMode: () => void;
  setLightMode: () => void;
  toggleTheme: () => void;
  setThemeToDevice: () => void;
  useSystem: boolean;
  primaryBackgroundColorAnimation?: Animated.WithAnimatedValue<any>;
  secondaryBackgroundColorAnimation?: Animated.WithAnimatedValue<any>;
  tertiaryBackgroundColorAnimation?: Animated.WithAnimatedValue<any>;
  primaryTextColorAnimation?: Animated.WithAnimatedValue<any>;
  secondaryTextColorAnimation?: Animated.WithAnimatedValue<any>;
  mutedTextColorAnimation?: Animated.WithAnimatedValue<any>;
  borderMutedColorAnimation?: Animated.WithAnimatedValue<any>;
}
