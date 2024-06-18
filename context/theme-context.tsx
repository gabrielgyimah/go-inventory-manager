import { Theme, ThemeContextType, ThemeMode } from '@/interfaces/theme-interface';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Appearance, Animated } from 'react-native';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';

const lightTheme: Theme = {
  background: {
    primary: '#FFFFFF',
    secondary: '#EDEDF2',
    tertiary: '#FFFFFF',
  },
  text: {
    primary: 'rgb(28, 28, 30)',
    secondary: '#1f2921',
    tertiary: '#9C9C9C',
    muted: '#BFBFBF',
    mutedLight: '#E0E0E0'
  },
  status: {
    valid: '#16A34A',
    danger: 'rgb(255, 59, 48)',
  },
  others: {
    accent: 'rgb(0, 122, 255)',
    tint: '#1f2921',
    black: '#000000',
    white: '#ffffff',
    gold: '#ffbf00',
    purple: '#8a2be2',
    skyBlue: '#00bfff',
  },
};

const darkTheme: Theme = {
  background: {
    primary: '#1F1F1F',
    secondary: '#292929',
    tertiary: '#333333',
  },
  text: {
    primary: 'rgb(229, 229, 231)',
    secondary: '#f9fafb',
    tertiary: '#9C9C9C',
    muted: '#6B6B70',
    mutedLight: '#333333'
  },
  status: {
    valid: '#16A34A',
    danger: 'rgb(255, 69, 58)',
  },
  others: {
    accent: 'rgb(10, 132, 255)',
    tint: '#f9fafb',
    black: '#000000',
    white: '#ffffff',
    gold: '#ffbf00',
    purple: '#8a2be2',
    skyBlue: '#00bfff',
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);
  const [mode, setMode] = useState<ThemeMode>('light');
  const [useSystem, setUseSystem] = useState(true);

  // Set initial theme based on system preference
  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    const initialMode = colorScheme === 'dark' ? 'dark' : 'light';
    setMode(initialMode);
    setTheme(initialMode === 'dark' ? darkTheme : lightTheme);
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      if (useSystem) {
        const newMode = colorScheme === 'dark' ? 'dark' : 'light';
        setMode(newMode);
        setTheme(newMode === 'dark' ? darkTheme : lightTheme);
      }
    });
    return () => subscription.remove();
  }, [useSystem]);

  const setDarkMode = () => {
    setUseSystem(false);
    setMode('dark');
    setTheme(darkTheme);
  };

  const setLightMode = () => {
    setUseSystem(false);
    setMode('light');
    setTheme(lightTheme);
  };

  const toggleTheme = () => {
    setUseSystem(false);
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    setTheme(newMode === 'dark' ? darkTheme : lightTheme);
  };

  const setThemeToDevice = () => {
    setUseSystem(true);
    const colorScheme = Appearance.getColorScheme();
    const newMode = colorScheme === 'dark' ? 'dark' : 'light';
    setMode(newMode);
    setTheme(newMode === 'dark' ? darkTheme : lightTheme);
  };

  useEffect(() => {
    console.log({ mode })
  }, [mode])

  const primaryBackgroundColorAnimation = useAnimatedStyle(() => {
    return {
      backgroundColor: mode === 'dark' ? withTiming('#121212') : withTiming('#FFFFFF'),
    };
  });
  
  const secondaryBackgroundColorAnimation = useAnimatedStyle(() => {
    return {
      backgroundColor: mode === 'dark' ? withTiming('#1E1E1E') : withTiming('#EDEDF2'),
    };
  });
  
  const tertiaryBackgroundColorAnimation = useAnimatedStyle(() => {
    return {
      backgroundColor: mode === 'dark' ? withTiming('#333333') : withTiming('#F5F5F5'),
    };
  });
  
  const primaryTextColorAnimation = useAnimatedStyle(() => {
    return {
      color: mode === 'dark' ? withTiming('#FFFFFF') : withTiming('#000000'),
    };
  });
  
  const secondaryTextColorAnimation = useAnimatedStyle(() => {
    return {
      color: mode === 'dark' ? withTiming('#EDEDF2') : withTiming('#292929'),
    };
  });
  
  const mutedTextColorAnimation = useAnimatedStyle(() => {
    return {
      color: mode === 'dark' ? withTiming('#BFBFBF') : withTiming('#6B6B70'),
    };
  });

  const borderMutedColorAnimation = useAnimatedStyle(() => {
    return {
      borderColor: mode === 'dark' ? withTiming('#BFBFBF') : withTiming('#E6E6E6'),
    };
  });
  
  const contextValue = {
    theme,
    mode,
    setDarkMode,
    setLightMode,
    setThemeToDevice,
    toggleTheme,
    useSystem,
    primaryBackgroundColorAnimation,
    secondaryBackgroundColorAnimation,
    tertiaryBackgroundColorAnimation,
    primaryTextColorAnimation,
    secondaryTextColorAnimation,
    mutedTextColorAnimation,
    borderMutedColorAnimation,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
