/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CaretDownIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CaretDownIcon(props: CaretDownIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.015 4.765l-3.75 3.75a.375.375 0 01-.53 0l-3.75-3.75a.375.375 0 01.265-.64h7.5a.375.375 0 01.265.64z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CaretDownIcon;
/* prettier-ignore-end */
