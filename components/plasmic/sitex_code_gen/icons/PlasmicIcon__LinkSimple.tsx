/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LinkSimpleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LinkSimpleIcon(props: LinkSimpleIconProps) {
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
        d={
          "M15.53 8.47a.748.748 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l6-6a.749.749 0 011.06 0zm4.682-4.683a5.25 5.25 0 00-7.425 0L9.97 6.606a.75.75 0 001.062 1.06l2.818-2.812a3.75 3.75 0 015.303 5.303l-2.819 2.818a.75.75 0 001.06 1.061l2.82-2.822a5.25 5.25 0 000-7.425zM12.97 16.334l-2.818 2.818a3.75 3.75 0 11-5.302-5.303l2.817-2.817A.75.75 0 106.606 9.97l-2.818 2.819a5.25 5.25 0 107.426 7.424l2.818-2.819a.75.75 0 10-1.062-1.06z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LinkSimpleIcon;
/* prettier-ignore-end */
