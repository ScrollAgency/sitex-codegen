/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IcRoundPlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IcRoundPlusIcon(props: IcRoundPlusIconProps) {
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
          "M15 10.832h-4.167v4.166a.834.834 0 01-1.666 0v-4.166H5a.833.833 0 010-1.667h4.167V4.998a.833.833 0 111.666 0v4.167H15a.833.833 0 010 1.667z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IcRoundPlusIcon;
/* prettier-ignore-end */
