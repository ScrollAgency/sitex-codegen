/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Outlined8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Outlined8Icon(props: Outlined8IconProps) {
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
          "M15.833 4.167v11.666H4.167V4.167h11.666zm2.5-2.5H1.667v16.666h16.666V1.667z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Outlined8Icon;
/* prettier-ignore-end */
