import { useTheme } from "@/context/theme-context"
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface HomeIconProps extends SvgProps {
  size: number;
  color: string;
}

const HomeIcon = ({ size, color, ...props }: HomeIconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      {...props}
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9.895 2.84-5.39 4.2c-.9.7-1.63 2.19-1.63 3.32v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12ZM12.875 17.99v-3"
      />
    </Svg>
  )
}
export default HomeIcon
