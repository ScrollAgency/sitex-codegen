/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurrencyEurIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurrencyEurIcon(props: CurrencyEurIconProps) {
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
          "M14.844 15.026a.625.625 0 01-.05.883 6.25 6.25 0 01-10.388-4.034H3.125a.625.625 0 110-1.25h1.25v-1.25h-1.25a.625.625 0 010-1.25h1.281a6.25 6.25 0 0110.386-4.034.625.625 0 11-.834.932 5 5 0 00-8.292 3.102h4.959a.625.625 0 110 1.25h-5v1.25h3.75a.625.625 0 110 1.25h-3.71a5 5 0 008.293 3.102.627.627 0 01.886.049z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CurrencyEurIcon;
/* prettier-ignore-end */
