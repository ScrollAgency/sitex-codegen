/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowDown4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowDown4Icon(props: ArrowDown4IconProps) {
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
        fill={"currentColor"}
        d={
          "m12.854 9.354-4.5 4.5a.5.5 0 0 1-.708 0l-4.5-4.5a.5.5 0 1 1 .708-.708L7.5 12.293V2.5a.5.5 0 1 1 1 0v9.793l3.646-3.647a.5.5 0 0 1 .708.708"
        }
      ></path>
    </svg>
  );
}

export default ArrowDown4Icon;
/* prettier-ignore-end */
