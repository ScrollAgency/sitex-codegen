/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhWarningFillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhWarningFillIcon(props: PhWarningFillIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.2 17.633L14.002 3.396a2.321 2.321 0 00-4.004 0L1.8 17.633a2.204 2.204 0 000 2.224A2.283 2.283 0 003.802 21h16.396a2.283 2.283 0 002-1.143 2.205 2.205 0 00.002-2.224zM11.25 9.75a.75.75 0 111.5 0v3.75a.75.75 0 11-1.5 0V9.75zM12 18a1.125 1.125 0 110-2.25A1.125 1.125 0 0112 18z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhWarningFillIcon;
/* prettier-ignore-end */
