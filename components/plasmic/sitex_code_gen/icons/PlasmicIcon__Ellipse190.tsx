/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse190IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse190Icon(props: Ellipse190IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 44 44"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"21.719"}
        cy={"21.719"}
        r={"21.719"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Ellipse190Icon;
/* prettier-ignore-end */
