import { useTheme } from "@/context/theme-context";
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface TelevisionProps extends SvgProps {
  size: number;
  color?: string
}

const Television: React.FC<TelevisionProps> = ({ size, color, ...props }) => {
  const { theme } = useTheme()
  return (
    <Svg
      width={size ? size : 28}
      height={size ? size : 28}
      fill="none"
      {...props}
      >
        <Path
          stroke={ color ? color : theme.text.muted}
          strokeWidth={1.5}
          d="M2 9c0-2.828 0-4.243.879-5.121C3.757 3 5.172 3 8 3h8c2.828 0 4.243 0 5.121.879C22 4.757 22 6.172 22 9v1c0 2.828 0 4.243-.879 5.121C20.243 16 18.828 16 16 16H8c-2.828 0-4.243 0-5.121-.879C2 14.243 2 12.828 2 10V9Z"
        />
        <Path
          stroke={ color ? color : theme.text.muted}
          strokeLinecap="round"
          strokeWidth={1.5}
          d="M12 19v-2.5m0 2.5 6 2m-6-2-6 2"
        />
    </Svg>
  )
}
export default Television
