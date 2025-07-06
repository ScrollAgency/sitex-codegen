/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Outlined15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Outlined15Icon(props: Outlined15IconProps) {
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

      <path fill={"currentColor"} d={"M9 4v1.9L6 8.2 3 5.9V4l3 2.3z"}></path>
    </svg>
  );
}

export default Outlined15Icon;
/* prettier-ignore-end */
