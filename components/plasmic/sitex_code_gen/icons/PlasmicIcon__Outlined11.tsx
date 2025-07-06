/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Outlined11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Outlined11Icon(props: Outlined11IconProps) {
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

      <path d={"M15.333 7H.667v2h14.666V7z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Outlined11Icon;
/* prettier-ignore-end */
