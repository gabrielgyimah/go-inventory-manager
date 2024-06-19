import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface GreenNoProductsProps extends SvgProps {
  size: number;
}

const GreenNoProducts: React.FC<GreenNoProductsProps> = ({ size, ...props }) => (
  <Svg
  width={size | 200}
  height={size| 200}
  fill="none"
  {...props}
  >
    <Path
      fill="#16A34A"
      d="M84.966 57.816v84.938l-65.947-28.485.314-84.63 65.633 28.177Z"
    />
    <Path
      fill="#78CA96"
      d="M84.967 57.867v84.937l65.626-27.5V29.91L84.967 57.867Z"
    />
    <Path
      fill="#9FD9B5"
      d="m84.966 57.816 65.947-27.622L85.483 1.19 19.02 29.503l65.947 28.313Z"
    />
    <Path
      fill="#78CA96"
      d="M1.01 44.655 67.377 76.87a.905.905 0 0 0 1.076-.217l16.513-18.837-65.947-28.312L.862 43.117a.905.905 0 0 0 .148 1.538Z"
    />
    <Path
      fill="#3EB369"
      d="m150.913 30.194 18.315 16.559a.902.902 0 0 1 .112 1.222.907.907 0 0 1-.35.276l-65.548 29.254a.906.906 0 0 1-1.043-.222L84.966 57.816l65.947-27.622Z"
    />
    <Path
      fill="#78CA96"
      d="m85.483 1.19 65.613 29.004 9.436-2.187a.903.903 0 0 0 .574-1.344.902.902 0 0 0-.418-.368L100.775.335a.902.902 0 0 0-.416-.073l-14.876.929Z"
    />
    <Path
      fill="#3EB369"
      d="M85.484 1.19 20.239 29.639l-8.248-1.386a.905.905 0 0 1-.19-1.722L73.196.072a.907.907 0 0 1 .43-.069l11.859 1.188Z"
    />
    <Path
      fill="#16A34A"
      stroke="#E2FCEB"
      strokeMiterlimit={10}
      strokeWidth={15}
      d="M153.486 129.561c8.996 0 16.289-7.293 16.289-16.289 0-8.997-7.293-16.29-16.289-16.29-8.997 0-16.29 7.293-16.29 16.29 0 8.996 7.293 16.289 16.29 16.289Z"
    />
    <Path
      fill="#FBFEFC"
      d="M159.5 113.5a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-9.817 0a3.817 3.817 0 1 0 7.634 0 3.817 3.817 0 0 0-7.634 0Z"
    />
  </Svg>
)
export default GreenNoProducts
