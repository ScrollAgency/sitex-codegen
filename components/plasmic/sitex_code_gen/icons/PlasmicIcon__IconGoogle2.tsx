/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconGoogle2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconGoogle2Icon(props: IconGoogle2IconProps) {
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
          "M21 11.79c0 4.15-2.21 9.21-8.87 9.21A9.07 9.07 0 0 1 3 12a9.07 9.07 0 0 1 9.13-9 9.22 9.22 0 0 1 5.7 2 .52.52 0 0 1 .19.37.55.55 0 0 1-.16.39A26 26 0 0 0 16 7.64a.49.49 0 0 1-.66.06 5.1 5.1 0 0 0-3.2-1 5.35 5.35 0 0 0 0 10.7c3 0 4.27-1.28 4.93-3.55H12.5a.5.5 0 0 1-.5-.5V10.7a.5.5 0 0 1 .5-.5h8a.45.45 0 0 1 .45.4q.056.594.05 1.19"
        }
      ></path>
    </svg>
  );
}

export default IconGoogle2Icon;
/* prettier-ignore-end */
