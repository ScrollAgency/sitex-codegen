/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type XIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function XIcon(props: XIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M19.28 18.22a.75.75 0 11-1.06 1.06L12 13.06l-6.22 6.22a.75.75 0 11-1.06-1.06L10.94 12 4.72 5.78a.75.75 0 111.06-1.06L12 10.94l6.22-6.22a.75.75 0 111.06 1.06L13.06 12l6.22 6.22z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default XIcon;
/* prettier-ignore-end */
