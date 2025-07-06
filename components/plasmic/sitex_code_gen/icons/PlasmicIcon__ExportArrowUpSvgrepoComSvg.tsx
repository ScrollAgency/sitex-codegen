/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ExportArrowUpSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function ExportArrowUpSvgrepoComSvgIcon(
  props: ExportArrowUpSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 35 35"}
      data-name={"Layer 2"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.5 23.1a1.25 1.25 0 01-1.25-1.25V3.154a1.25 1.25 0 012.5 0v18.694A1.25 1.25 0 0117.5 23.1z"
        }
      ></path>

      <path
        d={
          "M9.371 11.163a1.251 1.251 0 01-.884-2.134l6.751-6.751a3.2 3.2 0 014.524 0l6.752 6.751a1.25 1.25 0 01-1.768 1.771L18 4.046a.7.7 0 00-.99 0L10.254 10.8a1.243 1.243 0 01-.883.363zm22.065 23.303H3.564A3.317 3.317 0 01.25 31.153v-8.738a1.25 1.25 0 012.5 0v8.738a.815.815 0 00.814.813h27.872a.815.815 0 00.814-.813v-8.738a1.25 1.25 0 012.5 0v8.738a3.317 3.317 0 01-3.314 3.313z"
        }
      ></path>
    </svg>
  );
}

export default ExportArrowUpSvgrepoComSvgIcon;
/* prettier-ignore-end */
