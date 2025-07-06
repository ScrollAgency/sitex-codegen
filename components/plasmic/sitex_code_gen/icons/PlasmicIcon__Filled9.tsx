/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Filled9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Filled9Icon(props: Filled9IconProps) {
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
        fill={"currentColor"}
        d={
          "M8.5 1.5c-1.1 0-1.9.6-2.5 1.25-.6-.6-1.4-1.25-2.5-1.25-1.75 0-3 1.45-3 3.25 0 .9.35 1.7 1 2.25L6 11.25 10.5 7c.6-.6 1-1.35 1-2.25 0-1.8-1.25-3.25-3-3.25"
        }
      ></path>
    </svg>
  );
}

export default Filled9Icon;
/* prettier-ignore-end */
