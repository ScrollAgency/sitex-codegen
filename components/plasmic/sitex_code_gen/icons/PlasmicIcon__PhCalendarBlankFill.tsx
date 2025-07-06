/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhCalendarBlankFillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhCalendarBlankFillIcon(props: PhCalendarBlankFillIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 101 101"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M82.063 12.625h-9.47V9.469a3.156 3.156 0 00-6.312 0v3.156H34.72V9.469a3.156 3.156 0 00-6.313 0v3.156h-9.468a6.313 6.313 0 00-6.313 6.313v63.124a6.313 6.313 0 006.313 6.313h63.124a6.313 6.313 0 006.313-6.313V18.938a6.313 6.313 0 00-6.313-6.313zm0 18.938H18.937V18.938h9.47v3.156a3.157 3.157 0 006.312 0v-3.157H66.28v3.157a3.157 3.157 0 006.313 0v-3.157h9.469v12.625z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhCalendarBlankFillIcon;
/* prettier-ignore-end */
