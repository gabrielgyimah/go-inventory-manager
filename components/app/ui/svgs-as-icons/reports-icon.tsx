import { useTheme } from "@/context/theme-context"
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface ReportsIconProps extends SvgProps {
  size: number;
  color: string;
}

const ReportsIcon = ({ size, color, ...props }: ReportsIconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      {...props}
    >
    <Path
      stroke={color}
      strokeWidth={1.5}
      d="M2.375 12c0-4.714 0-7.071 1.464-8.536C5.304 2 7.661 2 12.375 2c4.714 0 7.071 0 8.535 1.464C22.375 4.93 22.375 7.286 22.375 12c0 4.714 0 7.071-1.465 8.535C19.447 22 17.09 22 12.375 22s-7.071 0-8.536-1.465C2.375 19.072 2.375 16.714 2.375 12Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M7.375 18V9M12.375 18V6M17.375 18v-5"
    />
  </Svg>
  )
}
export default ReportsIcon
