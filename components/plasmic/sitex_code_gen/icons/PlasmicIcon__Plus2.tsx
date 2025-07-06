/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Plus2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Plus2Icon(props: Plus2IconProps) {
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
          "M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3m-2.25 9.75h-4.5v4.5a.75.75 0 1 1-1.5 0v-4.5h-4.5a.75.75 0 1 1 0-1.5h4.5v-4.5a.75.75 0 1 1 1.5 0v4.5h4.5a.75.75 0 1 1 0 1.5"
        }
      ></path>
    </svg>
  );
}

export default Plus2Icon;
/* prettier-ignore-end */
