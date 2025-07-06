/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SlidersHorizontalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SlidersHorizontalIcon(props: SlidersHorizontalIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.5 6.25a.625.625 0 01.625-.625h2.904a2.187 2.187 0 014.192 0h6.654a.625.625 0 110 1.25h-6.654a2.187 2.187 0 01-4.192 0H3.125A.625.625 0 012.5 6.25zm14.375 6.875h-1.654a2.188 2.188 0 00-4.192 0H3.125a.625.625 0 100 1.25h7.904a2.188 2.188 0 004.192 0h1.654a.624.624 0 100-1.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SlidersHorizontalIcon;
/* prettier-ignore-end */
