/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Dot2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Dot2Icon(props: Dot2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M11 8a3 3 0 11-6 0 3 3 0 016 0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Dot2Icon;
/* prettier-ignore-end */
