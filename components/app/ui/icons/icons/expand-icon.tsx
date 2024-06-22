import { useTheme } from "@/context/theme-context"
import * as React from "react"
import Svg, { SvgProps, Path, G, Defs, ClipPath, Rect } from "react-native-svg"

interface ExpandIconProps extends SvgProps {
  size?: number;
  color?: string;
}

const ExpandIcon = ({ size, color, ...props }: ExpandIconProps) => {
  const { theme } = useTheme()
  return (
    <Svg
      width={!size ? 24 : size}
      height={!size ? 24 : size}
      fill="none"
      {...props}
    >
      <G
        stroke={color ? color : theme.text.muted}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        clipPath="url(#a)"
      >
        <Path d="m6 10-4.667 4.667m0 0h3.905m-3.905 0v-3.905M10 6l4.667-4.667m0 0h-3.905m3.905 0v3.905" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Rect width={16} height={16} fill="transparent" rx={5} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
export default ExpandIcon
