import { useTheme } from "@/context/theme-context"
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface InventoryIconProps extends SvgProps {
  size: number;
  color: string;
}

const InventoryIcon = ({ size, color, ...props }: InventoryIconProps) => {
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
        d="m16.203 3.382 2 1.05c2.151 1.129 3.227 1.693 3.825 2.708.597 1.014.597 2.277.597 4.801v.117c0 2.525 0 3.788-.597 4.802-.598 1.015-1.674 1.58-3.825 2.709l-2 1.049C14.447 21.539 13.569 22 12.625 22s-1.822-.46-3.578-1.382l-2-1.05C4.896 18.44 3.82 17.875 3.222 16.86c-.597-1.014-.597-2.277-.597-4.801v-.117c0-2.525 0-3.788.597-4.802.598-1.015 1.674-1.58 3.825-2.708l2-1.05C10.803 2.461 11.681 2 12.625 2s1.822.46 3.578 1.382ZM21.625 7.5l-4 2m-5 2.5-9-4.5m9 4.5v9.5m0-9.5 4.5-2.25.5-.25m0 0V13m0-3.5-9.5-5"
      />
    </Svg>
  )
}
export default InventoryIcon
