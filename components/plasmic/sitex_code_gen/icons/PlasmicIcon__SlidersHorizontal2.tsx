/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SlidersHorizontal2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SlidersHorizontal2Icon(props: SlidersHorizontal2IconProps) {
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
        fill={"currentColor"}
        d={
          "M2.5 6.25a.625.625 0 0 1 .625-.625h2.904a2.187 2.187 0 0 1 4.192 0h6.654a.625.625 0 1 1 0 1.25h-6.654a2.187 2.187 0 0 1-4.192 0H3.125A.625.625 0 0 1 2.5 6.25m14.375 6.875h-1.654a2.188 2.188 0 0 0-4.192 0H3.125a.625.625 0 1 0 0 1.25h7.904a2.188 2.188 0 0 0 4.192 0h1.654a.624.624 0 1 0 0-1.25"
        }
      ></path>
    </svg>
  );
}

export default SlidersHorizontal2Icon;
/* prettier-ignore-end */
