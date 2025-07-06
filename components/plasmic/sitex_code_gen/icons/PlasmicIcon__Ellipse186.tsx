/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse186IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse186Icon(props: Ellipse186IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#_cSBBUChudOVa)"}>
        <circle
          cx={"9.37"}
          cy={"9.37"}
          r={"6.263"}
          stroke={"currentColor"}
          strokeWidth={".214"}
        ></circle>
      </g>

      <defs>
        <filter
          id={"_cSBBUChudOVa"}
          x={".86"}
          y={".86"}
          width={"17.019"}
          height={"17.019"}
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
            stdDeviation={"1.07"}
            result={"effect1_foregroundBlur_1499_19168"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse186Icon;
/* prettier-ignore-end */
