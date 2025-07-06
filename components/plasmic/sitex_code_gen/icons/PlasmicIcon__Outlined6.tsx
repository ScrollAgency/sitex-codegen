/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Outlined6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Outlined6Icon(props: Outlined6IconProps) {
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
        d={"M15 6.667v3.166l-5 3.834-5-3.834V6.667l5 3.833 5-3.833z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Outlined6Icon;
/* prettier-ignore-end */
