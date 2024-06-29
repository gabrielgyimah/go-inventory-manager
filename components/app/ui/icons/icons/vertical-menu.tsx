import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const VerticalMenu = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#727573"
      strokeWidth={1.5}
      d="M8.333 15.833c0 .917.75 1.667 1.667 1.667.916 0 1.666-.75 1.666-1.667 0-.916-.75-1.666-1.666-1.666-.917 0-1.667.75-1.667 1.666ZM8.333 4.167c0 .916.75 1.666 1.667 1.666.916 0 1.666-.75 1.666-1.666 0-.917-.75-1.667-1.666-1.667-.917 0-1.667.75-1.667 1.667Z"
    />
    <Path
      stroke="#727573"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 11.667c.916 0 1.666-.75 1.666-1.667S10.916 8.333 10 8.333c-.917 0-1.667.75-1.667 1.667"
    />
  </Svg>
)
export default VerticalMenu
