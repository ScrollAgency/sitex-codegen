/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PencilSimple2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PencilSimple2Icon(props: PencilSimple2IconProps) {
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
          "m17.759 5.732-3.491-3.491a1.25 1.25 0 0 0-1.768 0l-9.634 9.634a1.24 1.24 0 0 0-.366.884v3.491a1.25 1.25 0 0 0 1.25 1.25h3.491a1.24 1.24 0 0 0 .884-.366L17.759 7.5a1.25 1.25 0 0 0 0-1.768M7.24 16.25H3.75v-3.491l6.875-6.875 3.491 3.491zM15 8.49 11.509 5l1.875-1.875 3.491 3.49L15 8.492z"
        }
      ></path>
    </svg>
  );
}

export default PencilSimple2Icon;
/* prettier-ignore-end */
