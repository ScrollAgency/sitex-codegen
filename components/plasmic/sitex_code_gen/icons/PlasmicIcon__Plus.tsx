/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlusIcon(props: PlusIconProps) {
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
          "M17.5 10a.624.624 0 01-.625.625h-6.25v6.25a.624.624 0 11-1.25 0v-6.25h-6.25a.625.625 0 110-1.25h6.25v-6.25a.625.625 0 011.25 0v6.25h6.25A.625.625 0 0117.5 10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PlusIcon;
/* prettier-ignore-end */
