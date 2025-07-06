/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Outlined3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Outlined3Icon(props: Outlined3IconProps) {
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
        d={"M9 4v1.9L6 8.2 3 5.9V4l3 2.3L9 4z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Outlined3Icon;
/* prettier-ignore-end */
