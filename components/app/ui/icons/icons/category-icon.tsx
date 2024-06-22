import { useTheme } from "@/context/theme-context"
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface CategoryIconProps extends SvgProps {
  size?: number;
  color?: string;
}

const CategoryIcon = ({ size, color, ...props }: CategoryIconProps) => {
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
        strokeWidth={1.5}
        d="m18.334 12.5-7.476 4.485a1.667 1.667 0 0 1-1.715 0L1.667 12.5m.595-4.524 6.88-4.128a1.667 1.667 0 0 1 1.716 0l6.88 4.128c.27.162.27.553 0 .715l-6.88 4.128a1.667 1.667 0 0 1-1.715 0L2.263 8.69a.417.417 0 0 1 0-.715Z"
      />
    </Svg>
  )
}
export default CategoryIcon
