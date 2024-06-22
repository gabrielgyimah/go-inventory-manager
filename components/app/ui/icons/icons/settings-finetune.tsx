import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const FineTune = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#16A34A"
      strokeLinecap="round"
      strokeWidth={2}
      d="M8 20V8m0 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 7V4m0 11a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
    />
  </Svg>
)
export default FineTune
