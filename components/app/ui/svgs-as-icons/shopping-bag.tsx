import * as React from "react"
import { Text } from "react-native"
import { Circle, Path, Rect, Svg, SvgProps } from "react-native-svg"

const ShoppinBagIcon = (props: SvgProps) => {
  const { color, height, width} = props
  return (
    <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 -0.5 25 25"
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.43 12-.99 4c-.823 2.913-1.5 3.748-2.97 3.946-.329.04-.66.058-.99.054h-3.96a7.478 7.478 0 0 1-.99-.054c-1.466-.2-2.147-1.033-2.971-3.946l-.99-4c-.493-2.986 1.753-3.991 3.93-4v-.875A3.064 3.064 0 0 1 12.5 4a3.064 3.064 0 0 1 3 3.125V8c2.179.009 4.424 1.013 3.932 4Z"
      clipRule="evenodd"
    />
    <Path
      fill={color}
      d="M15.5 8.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 1 0 0 1.5v-1.5ZM16.25 10a.75.75 0 0 0-1.5 0h1.5Zm-1.5 1a.75.75 0 1 0 1.5 0h-1.5Zm-4.5-1a.75.75 0 0 0-1.5 0h1.5Zm-1.5 1a.75.75 0 0 0 1.5 0h-1.5Zm6.75-3.75h-6v1.5h6v-1.5ZM14.75 10v1h1.5v-1h-1.5Zm-6 0v1h1.5v-1h-1.5Z"
    />
    </Svg>
  );
}
export default ShoppinBagIcon
