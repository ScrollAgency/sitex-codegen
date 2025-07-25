/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PdfDocumentSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PdfDocumentSvgrepoComSvgIcon(
  props: PdfDocumentSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
      version={"1.1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M161.28 328.32a61.013 61.013 0 00-40.32-8.32H85.333v128h28.374v-48.853h12.16a55.04 55.04 0 0035.84-8.747 38.613 38.613 0 0013.44-30.933 37.333 37.333 0 00-13.867-31.147zm-22.827 46.72a32.853 32.853 0 01-17.066 2.56h-8.32v-36.267h8.32a30.293 30.293 0 0117.493 3.414 17.493 17.493 0 017.467 15.36 15.147 15.147 0 01-7.894 14.933zM236.16 320h-35.413v128h33.92a90.24 90.24 0 0050.133-9.6 60.16 60.16 0 0023.893-54.4 64 64 0 00-17.706-48.853A73.387 73.387 0 00236.16 320zm28.16 98.987a51.2 51.2 0 01-29.227 6.4h-5.546v-82.774h5.12c17.92 0 24.96 1.707 32 8.107a43.947 43.947 0 0112.16 33.28 41.387 41.387 0 01-14.507 34.987zM339.84 448h28.8v-53.547h58.027V371.84H368.64v-29.227h58.027V320H339.84v128zM320 42.667H85.333v234.666H128v-192h174.293L384 167.04v110.293h42.667v-128L320 42.667z"
        }
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default PdfDocumentSvgrepoComSvgIcon;
/* prettier-ignore-end */
