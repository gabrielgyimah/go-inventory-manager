import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const UpDownArrow = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#727573"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 18V6m0 0 4 4.125M16 6l-4 4.125M8 6v12m0 0 4-4.125M8 18l-4-4.125"
    />
  </Svg>
)
export default UpDownArrow
