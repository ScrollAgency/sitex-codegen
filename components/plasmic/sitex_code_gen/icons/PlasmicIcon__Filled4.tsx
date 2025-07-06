/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Filled4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Filled4Icon(props: Filled4IconProps) {
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
          "M14.167 2.5C12.333 2.5 11 3.5 10 4.583 9 3.583 7.667 2.5 5.833 2.5c-2.916 0-5 2.417-5 5.417 0 1.5.584 2.833 1.667 3.75L10 18.75l7.5-7.083c1-1 1.667-2.25 1.667-3.75 0-3-2.084-5.417-5-5.417z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Filled4Icon;
/* prettier-ignore-end */
