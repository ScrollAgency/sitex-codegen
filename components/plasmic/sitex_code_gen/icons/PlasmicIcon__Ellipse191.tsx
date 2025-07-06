/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse191IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse191Icon(props: Ellipse191IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 59 59"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#tfpUG1SM2vo7a)"}>
        <circle
          cx={"29.719"}
          cy={"29.719"}
          r={"21.355"}
          stroke={"currentColor"}
          strokeWidth={".73"}
        ></circle>
      </g>

      <defs>
        <filter
          id={"tfpUG1SM2vo7a"}
          x={".705"}
          y={".705"}
          width={"58.029"}
          height={"58.029"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feGaussianBlur
            stdDeviation={"3.648"}
            result={"effect1_foregroundBlur_1219_18017"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse191Icon;
/* prettier-ignore-end */
