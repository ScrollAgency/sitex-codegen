/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Outlined5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Outlined5Icon(props: Outlined5IconProps) {
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
          "M13.333 4.167c2.084 0 3.334 1.583 3.334 3.5 0 1-.5 1.916-1.084 2.583C14.583 11.25 10 15 10 15s-4.583-3.75-5.583-4.75a3.656 3.656 0 01-1.084-2.583c0-1.917 1.25-3.5 3.334-3.5 1.416 0 2.75 1.333 3.333 2.5.583-1.167 1.917-2.5 3.333-2.5zm0-2.5c-1.25 0-2.416.5-3.333 1.166a5.235 5.235 0 00-3.333-1.166c-3.334 0-5.834 2.583-5.834 6C.833 9.25 1.5 10.75 2.667 12 3.833 13.25 10 18.25 10 18.25s6.167-5 7.333-6.25c1.167-1.25 1.834-2.75 1.834-4.333 0-3.417-2.5-6-5.834-6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Outlined5Icon;
/* prettier-ignore-end */
