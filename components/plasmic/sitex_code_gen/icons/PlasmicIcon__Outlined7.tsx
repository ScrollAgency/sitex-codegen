/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Outlined7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Outlined7Icon(props: Outlined7IconProps) {
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
          "M18.833 17l-3.666-3.667c.917-1.333 1.5-2.916 1.5-4.666C16.667 4.333 13.083.75 8.75.75S.833 4.333.833 8.667c0 4.333 3.584 7.916 7.917 7.916 1.75 0 3.333-.583 4.667-1.5l3.666 3.667 1.75-1.75zm-15.5-8.25c0-3 2.417-5.417 5.417-5.417s5.417 2.417 5.417 5.417-2.417 5.417-5.417 5.417S3.333 11.75 3.333 8.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Outlined7Icon;
/* prettier-ignore-end */
