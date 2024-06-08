import React from "react";

import { useTheme } from "@/context/theme-context";
import { Animated as ReactAnimated } from "react-native";
import Animated from "react-native-reanimated";

interface TextBaseProps {
  text: string;
  boldness: string;
  fontWeight: number;
  textAlign?: string;
  animationType: ReactAnimated.WithAnimatedValue<any>;
}

export const TextBase = ({
  text,
  boldness,
  fontWeight,
  animationType,
  textAlign,
}: TextBaseProps) => {

  return (
    <Animated.Text
      style={[
        { 
          fontWeight: boldness, 
          fontSize: fontWeight, 
          textAlign: textAlign,
        }, 
        animationType,
      ]}
    >
      {text}
    </Animated.Text>
  );
};



interface StyledTextProps {
  text: string;
  textAlign?: string;
}

export const StyledH1PrimaryText = ({ text, textAlign }: StyledTextProps) => {
  const { primaryTextColorAnimation } = useTheme();

  return (
    <TextBase
      text={text}
      textAlign={textAlign}
      boldness="700"
      fontWeight={32}
      animationType={primaryTextColorAnimation}
    />
  );
};

export const StyledH1MutedText = ({ text, textAlign }: StyledTextProps) => {
  const { mutedTextColorAnimation } = useTheme();

  return (
    <TextBase
      text={text}
      textAlign={textAlign}
      boldness="700"
      fontWeight={32}
      animationType={mutedTextColorAnimation}
    />
  );
};

export const StyledH2PrimaryText = ({ text, textAlign }: StyledTextProps) => {
  const { primaryTextColorAnimation } = useTheme();

  return (
    <TextBase
      text={text}
      textAlign={textAlign}
      boldness="700"
      fontWeight={28}
      animationType={primaryTextColorAnimation}
    />
  );
};

export const StyledH2MutedText = ({ text, textAlign }: StyledTextProps) => {
  const { mutedTextColorAnimation } = useTheme();

  return (
    <TextBase
      text={text}
      textAlign={textAlign}
      boldness="700"
      fontWeight={28}
      animationType={mutedTextColorAnimation}
    />
  );
};

export const StyledH3PrimaryText = ({ text, textAlign }: StyledTextProps) => {
  const { primaryTextColorAnimation } = useTheme();

  return (
    <TextBase
      text={text}
      textAlign={textAlign}
      boldness="700"
      fontWeight={24}
      animationType={primaryTextColorAnimation}
    />
  );
};

export const StyledH3MutedText = ({ text, textAlign }: StyledTextProps) => {
  const { mutedTextColorAnimation } = useTheme();

  return (
    <TextBase
      text={text}
      textAlign={textAlign}
      boldness="700"
      fontWeight={24}
      animationType={mutedTextColorAnimation}
    />
  );
};

export const StyledH4PrimaryText = ({ text, textAlign }: StyledTextProps) => {
  const { primaryTextColorAnimation } = useTheme();

  return (
    <TextBase
      text={text}
      textAlign={textAlign}
      boldness="700"
      fontWeight={20}
      animationType={primaryTextColorAnimation}
    />
  );
};

export const StyledH4MutedText = ({ text, textAlign }: StyledTextProps) => {
  const { mutedTextColorAnimation } = useTheme();

  return (
    <TextBase
      text={text}
      textAlign={textAlign}
      boldness="700"
      fontWeight={20}
      animationType={mutedTextColorAnimation}
    />
  );
};

export const StyledH5PrimaryText = ({ text, textAlign }: StyledTextProps) => {
  const { primaryTextColorAnimation } = useTheme();

  return (
    <TextBase
      text={text}
      textAlign={textAlign}
      boldness="700"
      fontWeight={16}
      animationType={primaryTextColorAnimation}
    />
  );
};

export const StyledH5MutedText = ({ text, textAlign }: StyledTextProps) => {
  const { mutedTextColorAnimation } = useTheme();

  return (
    <TextBase
      text={text}
      textAlign={textAlign}
      boldness="700"
      fontWeight={16}
      animationType={mutedTextColorAnimation}
    />
  );
};

export const StyledH6PrimaryText = ({ text, textAlign }: StyledTextProps) => {
  const { primaryTextColorAnimation } = useTheme();

  return (
    <TextBase
      text={text}
      textAlign={textAlign}
      boldness="700"
      fontWeight={12}
      animationType={primaryTextColorAnimation}
    />
  );
};

export const StyledH6MutedText = ({ text, textAlign }: StyledTextProps) => {
  const { mutedTextColorAnimation } = useTheme();

  return (
    <TextBase
      text={text}
      textAlign={textAlign}
      boldness="700"
      fontWeight={12}
      animationType={mutedTextColorAnimation}
    />
  );
};

export const StyledBodyPrimaryText = ({ text, textAlign }: StyledTextProps) => {
  const { primaryTextColorAnimation } = useTheme();

  return (
    <TextBase
      text={text}
      textAlign={textAlign}
      boldness="normal"
      fontWeight={16}
      animationType={primaryTextColorAnimation}
    />
  );
};

export const StyledBodyMutedText = ({ text, textAlign }: StyledTextProps) => {
  const { mutedTextColorAnimation } = useTheme();

  return (
    <TextBase
      text={text}
      textAlign={textAlign}
      boldness="normal"
      fontWeight={16}
      animationType={mutedTextColorAnimation}
    />
  );
}
