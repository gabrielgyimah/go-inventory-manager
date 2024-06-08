import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const MailIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#969F99"
      strokeWidth={1.5}
      d="M2.5 12c0-3.771 0-5.657 1.172-6.828C4.843 4 6.729 4 10.5 4h4c3.771 0 5.657 0 6.828 1.172C22.5 6.343 22.5 8.229 22.5 12c0 3.771 0 5.657-1.172 6.828C20.157 20 18.271 20 14.5 20h-4c-3.771 0-5.657 0-6.828-1.172C2.5 17.657 2.5 15.771 2.5 12Z"
    />
    <Path
      stroke="#969F99"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m6.5 8 2.159 1.8c1.836 1.53 2.755 2.295 3.841 2.295 1.086 0 2.005-.765 3.841-2.296L18.5 8"
    />
  </Svg>
)
export default MailIcon
