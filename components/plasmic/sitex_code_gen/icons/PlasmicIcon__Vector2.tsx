/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M13.75 0H1.25A1.25 1.25 0 0 0 0 1.25v12.5A1.25 1.25 0 0 0 1.25 15h12.5A1.25 1.25 0 0 0 15 13.75V1.25A1.25 1.25 0 0 0 13.75 0m-1.875 8.125h-3.75v3.75a.625.625 0 1 1-1.25 0v-3.75h-3.75a.625.625 0 0 1 0-1.25h3.75v-3.75a.625.625 0 0 1 1.25 0v3.75h3.75a.625.625 0 1 1 0 1.25"
        }
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
