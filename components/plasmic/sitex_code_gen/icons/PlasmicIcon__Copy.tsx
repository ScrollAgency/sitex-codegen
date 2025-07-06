/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CopyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CopyIcon(props: CopyIconProps) {
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
          "M16.875 2.5h-10a.625.625 0 00-.625.625V6.25H3.125a.625.625 0 00-.625.625v10a.625.625 0 00.625.625h10a.624.624 0 00.625-.625V13.75h3.125a.624.624 0 00.625-.625v-10a.625.625 0 00-.625-.625zM12.5 16.25H3.75V7.5h8.75v8.75zm3.75-3.75h-2.5V6.875a.625.625 0 00-.625-.625H7.5v-2.5h8.75v8.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CopyIcon;
/* prettier-ignore-end */
