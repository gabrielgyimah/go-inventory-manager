import { useTheme } from "@/context/theme-context";
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface AirpodsProps extends SvgProps {
  size: number;
  color?: string
}

const Airpods: React.FC<AirpodsProps> = ({ size, color, ...props }) => {
  const { theme } = useTheme()
  return (
    <Svg
      width={size ? size : 28}
      height={size ? size : 28}
      fill="none"
      {...props}
      >
      <Path
        stroke={color ? color : theme.text.muted}
        strokeWidth={1.5}
        d="M14 18v.75a2.25 2.25 0 0 0 4.5 0V18M14 18V8.312c0-.29 0-.435.006-.557a5 5 0 0 1 4.749-4.749C18.877 3 19.022 3 19.313 3c.174 0 .26 0 .334.004a3 3 0 0 1 2.85 2.849c.003.073.003.16.003.335V8.3a3 3 0 0 1-3 3 1 1 0 0 0-1 1V18M14 18h4.5M11 18v.75a2.25 2.25 0 0 1-4.5 0V18m4.5 0V8.312c0-.29 0-.435-.006-.557a5 5 0 0 0-4.749-4.749C6.123 3 5.978 3 5.687 3c-.174 0-.26 0-.334.004a3 3 0 0 0-2.85 2.849c-.003.073-.003.16-.003.335V8.3a3 3 0 0 0 3 3 1 1 0 0 1 1 1V18m4.5 0H6.5"
      />
      <Path
        stroke={color ? color : theme.text.muted}
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20 6v2.5"
      />
      <Path
        stroke={color ? color : theme.text.muted}
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M5 6v2.5"
      />
    </Svg>
  )
}
export default Airpods
