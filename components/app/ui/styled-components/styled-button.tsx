import React from "react";
import { Animated, Pressable } from "react-native"

interface BaseButtonProps {
  title: string;
  color?: string;
  borderRadius: number,
  aimatedBackround?: Animated.WithAnimatedValue<any>;
  onPressHandler: () => void,
  textTypes: React.ReactNode,
}

const BaseButton = () => {
  return (
    <Pressable>
      
    </Pressable>
  )
}