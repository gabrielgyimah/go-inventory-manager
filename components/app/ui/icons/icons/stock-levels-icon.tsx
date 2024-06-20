import { useTheme } from "@/context/theme-context"
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface StockLevelsIconProps extends SvgProps {
  size?: number;
  color?: string;
}

const StockLevelsIcon = ({ size, color, ...props }: StockLevelsIconProps) => {
  const { theme } = useTheme()
  return (
    <Svg
      width={!size ? 24 : size}
      height={!size ? 24 : size}
      fill="none"
      {...props}
    >
      <Path
        stroke={color ? color : theme.text.muted}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m22 18-7.38-7.335c-.997-.991-1.496-1.487-2.115-1.487-.619 0-1.117.496-2.115 1.488l-.24.238c-.997.992-1.497 1.489-2.116 1.489s-1.118-.497-2.115-1.49L2 7m20 11v-5.546M22 18h-5.582"
      />
    </Svg>
  )
}
export default StockLevelsIcon
