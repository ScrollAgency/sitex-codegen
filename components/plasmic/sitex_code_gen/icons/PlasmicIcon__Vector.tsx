/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "m9.854 7.354-4.5 4.5a.5.5 0 0 1-.707 0l-4.5-4.5a.5.5 0 0 1 .707-.708L4.5 10.293V.5a.5.5 0 0 1 1 0v9.793l3.647-3.647a.5.5 0 1 1 .707.708"
        }
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
