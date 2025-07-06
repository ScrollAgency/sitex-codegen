/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector3Icon(props: Vector3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M13.75 0H4.009a1.24 1.24 0 0 0-.884.366L.366 3.125A1.24 1.24 0 0 0 0 4.009v9.741A1.25 1.25 0 0 0 1.25 15h12.5A1.25 1.25 0 0 0 15 13.75V1.25A1.25 1.25 0 0 0 13.75 0M4.375 1.25h6.25v2.5h-6.25zm9.375 12.5H1.25V4.009l1.875-1.875V3.75A1.25 1.25 0 0 0 4.375 5h6.25a1.25 1.25 0 0 0 1.25-1.25v-2.5h1.875zM7.5 6.25a3.125 3.125 0 1 0 0 6.25 3.125 3.125 0 0 0 0-6.25m0 5a1.875 1.875 0 1 1 0-3.75 1.875 1.875 0 0 1 0 3.75"
        }
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
