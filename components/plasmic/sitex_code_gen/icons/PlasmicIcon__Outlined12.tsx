/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Outlined12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Outlined12Icon(props: Outlined12IconProps) {
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
        fill={"currentColor"}
        d={
          "M22 2v20H2V2zM5 5v14h14V5zm13.1 4.6-7.6 7.5-4.6-4.5 2.2-2.2 2.4 2.5 5.4-5.5z"
        }
      ></path>
    </svg>
  );
}

export default Outlined12Icon;
/* prettier-ignore-end */
