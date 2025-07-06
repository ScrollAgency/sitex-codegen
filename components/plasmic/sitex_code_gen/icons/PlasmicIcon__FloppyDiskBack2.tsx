/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FloppyDiskBack2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FloppyDiskBack2Icon(props: FloppyDiskBack2IconProps) {
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
        fill={"currentColor"}
        d={
          "M16.25 2.5H6.509a1.24 1.24 0 0 0-.884.366L2.866 5.625a1.24 1.24 0 0 0-.366.884v9.741a1.25 1.25 0 0 0 1.25 1.25h12.5a1.25 1.25 0 0 0 1.25-1.25V3.75a1.25 1.25 0 0 0-1.25-1.25M6.875 3.75h6.25v2.5h-6.25zm9.375 12.5H3.75V6.509l1.875-1.875V6.25a1.25 1.25 0 0 0 1.25 1.25h6.25a1.25 1.25 0 0 0 1.25-1.25v-2.5h1.875zM10 8.75A3.125 3.125 0 1 0 10 15a3.125 3.125 0 0 0 0-6.25m0 5A1.875 1.875 0 1 1 10 10a1.875 1.875 0 0 1 0 3.75"
        }
      ></path>
    </svg>
  );
}

export default FloppyDiskBack2Icon;
/* prettier-ignore-end */
