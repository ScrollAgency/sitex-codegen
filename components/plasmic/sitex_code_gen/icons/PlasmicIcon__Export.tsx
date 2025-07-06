/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ExportIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ExportIcon(props: ExportIconProps) {
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
          "M16.875 8.75v7.5a1.25 1.25 0 0 1-1.25 1.25H4.375a1.25 1.25 0 0 1-1.25-1.25v-7.5a1.25 1.25 0 0 1 1.25-1.25H6.25a.625.625 0 0 1 0 1.25H4.375v7.5h11.25v-7.5H13.75a.625.625 0 1 1 0-1.25h1.875a1.25 1.25 0 0 1 1.25 1.25M7.317 5.442l2.058-2.058v7.241a.625.625 0 1 0 1.25 0V3.384l2.058 2.058a.625.625 0 0 0 .884-.884l-3.125-3.125a.625.625 0 0 0-.884 0L6.433 4.558a.625.625 0 0 0 .884.884"
        }
      ></path>
    </svg>
  );
}

export default ExportIcon;
/* prettier-ignore-end */
