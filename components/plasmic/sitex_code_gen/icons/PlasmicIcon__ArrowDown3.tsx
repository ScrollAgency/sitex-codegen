/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowDown3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowDown3Icon(props: ArrowDown3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.333"}
        d={"M8 3.333v9.334m0 0L12.667 8M8 12.667 3.333 8"}
      ></path>
    </svg>
  );
}

export default ArrowDown3Icon;
/* prettier-ignore-end */
