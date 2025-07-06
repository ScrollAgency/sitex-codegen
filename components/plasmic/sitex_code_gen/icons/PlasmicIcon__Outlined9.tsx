/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Outlined9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Outlined9Icon(props: Outlined9IconProps) {
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
          "M8.75 14.667l-5.083-5L5.5 7.833l3.25 3.334 6.167-6.25L16.75 6.75l-8 7.917z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Outlined9Icon;
/* prettier-ignore-end */
