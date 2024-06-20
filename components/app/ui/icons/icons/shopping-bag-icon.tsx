import { useTheme } from "@/context/theme-context";
import * as React from "react"
import { Path, Svg, SvgProps } from "react-native-svg"

interface ShoppingBagIconProps extends SvgProps {
  size?: number;
  color?: string;
}

const ShoppingBagIcon = ({ size, color, ...props }: ShoppingBagIconProps) => {
  const { theme } = useTheme()
  return (
    <Svg
    width={!size ? 24 : size}
    height={!size ? 24 : size}
    fill="none"
    viewBox="0 -0.5 25 25"
    {...props}
  >
    <Path
        stroke={color ? color : theme.text.muted}
      strokeWidth={1.5}
      d="M3.162 10.024c.447-2.238.671-3.357 1.41-4.078.137-.133.285-.254.443-.362C5.867 5 7.008 5 9.29 5h1.42c2.282 0 3.423 0 4.275.584.158.108.306.229.442.362.74.721.963 1.84 1.411 4.078.643 3.214.964 4.82.224 5.959-.134.206-.29.397-.466.568-.971.949-2.61.949-5.886.949H9.29c-3.277 0-4.915 0-5.886-.949a3.337 3.337 0 0 1-.466-.568c-.74-1.139-.419-2.745.224-5.959Z"
    />
    <Path
        stroke={color ? color : theme.text.muted}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M7.5 5v-.833a2.5 2.5 0 1 1 5 0V5M7.643 12.5a2.501 2.501 0 0 0 4.715 0"
    />
    </Svg>
  );
}
export default ShoppingBagIcon
