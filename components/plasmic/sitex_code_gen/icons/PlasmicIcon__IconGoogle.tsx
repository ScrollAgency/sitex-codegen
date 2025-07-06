/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconGoogleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconGoogleIcon(props: IconGoogleIconProps) {
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
          "M21 11.79c0 4.15-2.21 9.21-8.87 9.21A9.07 9.07 0 013 12a9.07 9.07 0 019.13-9 9.22 9.22 0 015.7 2 .52.52 0 01.19.37.55.55 0 01-.16.39A26.403 26.403 0 0016 7.64a.49.49 0 01-.66.06 5.11 5.11 0 00-3.2-1 5.35 5.35 0 000 10.7c3 0 4.27-1.28 4.93-3.55H12.5a.5.5 0 01-.5-.5V10.7a.5.5 0 01.5-.5h8a.45.45 0 01.45.4c.037.396.054.793.05 1.19z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconGoogleIcon;
/* prettier-ignore-end */
