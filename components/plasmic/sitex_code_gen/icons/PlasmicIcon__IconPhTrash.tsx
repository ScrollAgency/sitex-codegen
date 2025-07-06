/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconPhTrashIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconPhTrashIcon(props: IconPhTrashIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.813 2.625H9.624v-.438A1.313 1.313 0 008.312.875H5.688a1.313 1.313 0 00-1.313 1.313v.437H2.187a.437.437 0 100 .875h.438v7.875a.875.875 0 00.875.875h7a.875.875 0 00.875-.875V3.5h.438a.438.438 0 000-.875zM5.25 2.187a.437.437 0 01.438-.437h2.625a.437.437 0 01.437.438v.437h-3.5v-.438zm5.25 9.188h-7V3.5h7v7.875zM6.125 5.687v3.5a.437.437 0 11-.875 0v-3.5a.437.437 0 11.875 0zm2.625 0v3.5a.437.437 0 11-.875 0v-3.5a.437.437 0 11.875 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconPhTrashIcon;
/* prettier-ignore-end */
