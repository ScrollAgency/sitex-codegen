/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Outlined17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Outlined17Icon(props: Outlined17IconProps) {
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
          "M3.5.5V2h5V.5H10V2h1.5v9.5H.5V2H2V.5zM2 6v4h8V6zm2.5 1v1.5H3V7zM2 3.5v1h8v-1z"
        }
      ></path>
    </svg>
  );
}

export default Outlined17Icon;
/* prettier-ignore-end */
