import React from "react";

import { useTheme } from "@/context/theme-context";
import { Text, TextStyle } from "react-native";

interface TextBaseProps {
  text: string;
  style?: TextStyle,
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
}

export const TextBase = ({
  text,
  style,
  numberOfLines,
  ellipsizeMode
}: TextBaseProps) => {

  return (
    <Text
      style={style}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {text}
    </Text>
  );
};



interface StyledTextProps {
  text: string;
  style?: TextStyle,
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
}

export const StyledH1PrimaryText = ({ text, style, numberOfLines, ellipsizeMode }: StyledTextProps) => {
  const { theme } = useTheme();

  return (
    <TextBase
      text={text}
      style={{ fontSize: 32, fontWeight: '700', color: theme.text.primary, ...style}}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    />
  );
};

export const StyledH1MutedText = ({ text, style, numberOfLines, ellipsizeMode }: StyledTextProps) => {
  const { theme } = useTheme();

  return (
    <TextBase
      text={text}
      style={{ fontSize: 32, fontWeight: '700', color: theme.text.muted, ...style}}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    />
  );
};

export const StyledH2PrimaryText = ({ text, style, numberOfLines, ellipsizeMode }: StyledTextProps) => {
  const { theme } = useTheme();

  return (
    <TextBase
      text={text}
      style={{ fontSize: 28, fontWeight: '700', color: theme.text.primary, ...style}}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    />
  );
};

export const StyledH2MutedText = ({ text, style, numberOfLines, ellipsizeMode }: StyledTextProps) => {
  const { theme } = useTheme();

  return (
    <TextBase
      text={text}
      style={{ fontSize: 28, fontWeight: '700', color: theme.text.muted, ...style}}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    />
  );
};

export const StyledH3PrimaryText = ({ text, style, numberOfLines, ellipsizeMode }: StyledTextProps) => {
  const { theme } = useTheme();

  return (
    <TextBase
      text={text}
      style={{ fontSize: 24, fontWeight: '700', color: theme.text.primary, ...style}}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    />
  );
};

export const StyledH3MutedText = ({ text, style, numberOfLines, ellipsizeMode }: StyledTextProps) => {
  const { theme } = useTheme();

  return (
    <TextBase
      text={text}
      style={{ fontSize: 24, fontWeight: '700', color: theme.text.muted, ...style}}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    />
  );
};

export const StyledH4PrimaryText = ({ text, style, numberOfLines, ellipsizeMode }: StyledTextProps) => {
  const { theme } = useTheme();

  return (
    <TextBase
      text={text}
      style={{ fontSize: 20, fontWeight: '700', color: theme.text.primary, ...style}}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    />
  );
};

export const StyledH4MutedText = ({ text, style, numberOfLines, ellipsizeMode }: StyledTextProps) => {
  const { theme } = useTheme();

  return (
    <TextBase
      text={text}
      style={{ fontSize: 20, fontWeight: '700', color: theme.text.muted, ...style}}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    />
  );
};

export const StyledH5PrimaryText = ({ text, style, numberOfLines, ellipsizeMode }: StyledTextProps) => {
  const { theme } = useTheme();

  return (
    <TextBase
      text={text}
      style={{ fontSize: 16, fontWeight: '700', color: theme.text.primary, ...style}}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    />
  );
};

export const StyledH5MutedText = ({ text, style, numberOfLines, ellipsizeMode }: StyledTextProps) => {
  const { theme } = useTheme();

  return (
    <TextBase
      text={text}
      style={{ fontSize: 16, fontWeight: '500', color: theme.text.muted, ...style}}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    />
  );
};

export const StyledH6PrimaryText = ({ text, style, numberOfLines, ellipsizeMode }: StyledTextProps) => {
  const { theme } = useTheme();

  return (
    <TextBase
      text={text}
      style={{ fontSize: 12, fontWeight: '500', color: theme.text.primary, ...style}}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    />
  );
};

export const StyledH6MutedText = ({ text, style, numberOfLines, ellipsizeMode }: StyledTextProps) => {
  const { theme } = useTheme();

  return (
    <TextBase
      text={text}
      style={{ fontSize: 12, fontWeight: '500', color: theme.text.muted, ...style}}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    />
  );
};

export const StyledBodyPrimaryText = ({ text, style, numberOfLines, ellipsizeMode }: StyledTextProps) => {
  const { theme } = useTheme();

  return (
    <TextBase
      text={text}
      style={{ fontSize: 16, fontWeight: 'normal', color: theme.text.primary, ...style}}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    />
  );
};

export const StyledBodyMutedText = ({ text, style, numberOfLines, ellipsizeMode }: StyledTextProps) => {
  const { theme } = useTheme();

  return (
    <TextBase
      text={text}
      style={{ fontSize: 16, fontWeight: 'normal', color: theme.text.muted, ...style}}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    />
  );
};
