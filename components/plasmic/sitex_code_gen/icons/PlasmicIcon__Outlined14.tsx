/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Outlined14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Outlined14Icon(props: Outlined14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M8 2.5c1.25 0 2 .95 2 2.1 0 .6-.3 1.15-.65 1.55C8.75 6.75 6 9 6 9S3.25 6.75 2.65 6.15C2.25 5.75 2 5.2 2 4.6c0-1.15.75-2.1 2-2.1.85 0 1.65.8 2 1.5.35-.7 1.15-1.5 2-1.5M8 1c-.75 0-1.45.3-2 .7A3.14 3.14 0 0 0 4 1C2 1 .5 2.55.5 4.6c0 .95.4 1.85 1.1 2.6S6 10.95 6 10.95s3.7-3 4.4-3.75 1.1-1.65 1.1-2.6C11.5 2.55 10 1 8 1"
        }
      ></path>
    </svg>
  );
}

export default Outlined14Icon;
/* prettier-ignore-end */
