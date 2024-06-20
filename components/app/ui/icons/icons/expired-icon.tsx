import { useTheme } from "@/context/theme-context"
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface ExpiredIconProps extends SvgProps {
  size?: number;
  color?: string;
}

const ExpiredIcon = ({ size, color, ...props }: ExpiredIconProps) => {
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
        d="m20.414 14.496-.664.35.664-.35Zm-4.178-7.928.664-.35-.663.35Zm-8.473 0-.663-.35.663.35Zm-4.177 7.928.663.35-.663-.35ZM13.269 2.27l.307-.684-.307.684Zm-2.538 0 .308.684-.308-.684Zm10.017 18.222.415.625-.415-.625Zm1.232-1.891-.741-.116.741.116Zm-18.728 1.89-.415.626.415-.625Zm-1.232-1.89.741-.116-.741.116Zm10.73-9.605a.75.75 0 0 0-1.5.006l1.5-.006Zm-1.478 5.006a.75.75 0 0 0 1.5-.006l-1.5.006ZM12.75 17a.75.75 0 0 0-1.5 0h1.5Zm-1.5.01a.75.75 0 0 0 1.5 0h-1.5Zm-3.428 4.74h8.355v-1.5H7.822v1.5Zm13.256-7.604L16.9 6.218l-1.327.7 4.177 7.927 1.328-.699ZM7.1 6.218l-4.178 7.928 1.327.7 4.178-7.929L7.1 6.218Zm9.8 0c-.675-1.28-1.205-2.288-1.685-3.023-.476-.73-.975-1.31-1.639-1.608l-.615 1.368c.258.116.562.39.998 1.06.433.662.925 1.595 1.614 2.902l1.327-.699Zm-8.473.7c.689-1.308 1.181-2.24 1.614-2.903.436-.67.74-.944.998-1.06l-.615-1.368c-.664.299-1.163.879-1.64 1.608-.48.735-1.01 1.743-1.684 3.023l1.327.7Zm5.15-5.331a3.855 3.855 0 0 0-3.153 0l.615 1.368a2.355 2.355 0 0 1 1.922 0l.615-1.368Zm2.6 20.163c1.256 0 2.246 0 3.016-.066.767-.067 1.429-.207 1.97-.566l-.83-1.25c-.223.148-.577.261-1.27.321-.69.06-1.603.061-2.886.061v1.5Zm3.573-6.905c.575 1.09.98 1.861 1.23 2.469.25.608.295.94.259 1.172l1.482.23c.1-.643-.071-1.287-.354-1.974-.283-.688-.73-1.533-1.29-2.596l-1.327.7Zm1.413 6.273a3.543 3.543 0 0 0 1.558-2.401l-1.482-.23a2.044 2.044 0 0 1-.905 1.38l.829 1.25Zm-13.34-.868c-1.283 0-2.196 0-2.886-.06-.693-.06-1.048-.174-1.27-.322l-.83 1.25c.541.359 1.203.5 1.97.566.77.067 1.76.066 3.015.066v-1.5Zm-4.9-6.104c-.56 1.063-1.007 1.908-1.29 2.596-.283.687-.454 1.331-.354 1.975l1.482-.23c-.036-.233.008-.564.259-1.173.25-.608.655-1.378 1.23-2.469l-1.328-.699Zm.744 5.722a2.044 2.044 0 0 1-.906-1.382l-1.482.23c.153.982.722 1.847 1.558 2.402l.83-1.25ZM11.25 9.003l.022 5 1.5-.006-.022-5-1.5.006Zm0 7.997v.01h1.5V17h-1.5Z"
      />
    </Svg>
  )
}
export default ExpiredIcon