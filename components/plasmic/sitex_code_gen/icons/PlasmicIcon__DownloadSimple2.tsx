/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DownloadSimple2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DownloadSimple2Icon(props: DownloadSimple2IconProps) {
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
          "M17.5 11.25v5a.624.624 0 0 1-.625.625H3.125a.625.625 0 0 1-.625-.625v-5a.625.625 0 1 1 1.25 0v4.375h12.5V11.25a.624.624 0 1 1 1.25 0m-7.942.442a.626.626 0 0 0 .884 0l3.125-3.125a.624.624 0 1 0-.884-.884L10.625 9.74V2.5a.625.625 0 1 0-1.25 0v7.241L7.317 7.683a.625.625 0 0 0-.884.884z"
        }
      ></path>
    </svg>
  );
}

export default DownloadSimple2Icon;
/* prettier-ignore-end */
