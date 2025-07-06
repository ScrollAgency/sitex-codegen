/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhPaperclipFillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhPaperclipFillIcon(props: PhPaperclipFillIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 43 43"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M21.5 4.031A17.469 17.469 0 1 0 38.969 21.5 17.49 17.49 0 0 0 21.5 4.031m6.326 8.456a1.344 1.344 0 0 0-1.902 0L14.628 24.02a4.034 4.034 0 0 0 2.843 6.888 4.03 4.03 0 0 0 2.853-1.178l8.284-8.452a1.343 1.343 0 1 1 1.919 1.882l-8.293 8.462a6.719 6.719 0 1 1-9.51-9.492L24.02 10.597a4.034 4.034 0 0 1 6.888 2.843 4.03 4.03 0 0 1-1.178 2.853L18.428 27.816a1.343 1.343 0 1 1-1.918-1.882l11.306-11.537a1.343 1.343 0 0 0 .01-1.91"
        }
      ></path>
    </svg>
  );
}

export default PhPaperclipFillIcon;
/* prettier-ignore-end */
