// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicRetexMenu,
  DefaultRetexMenuProps
} from "./plasmic/sitex_code_gen/PlasmicRetexMenu";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface RetexMenuProps extends Omit<DefaultRetexMenuProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultRetexMenuProps altogether and have
// total control over the props for your component.
export interface RetexMenuProps extends DefaultRetexMenuProps {}

function RetexMenu_(props: RetexMenuProps, ref: HTMLElementRefOf<"div">) {
  // Use PlasmicRetexMenu to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicRetexMenu are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all RetexMenuProps here, but feel free
  // to do whatever works for you.

  return <PlasmicRetexMenu retexMenu={{ ref }} {...props} />;
}

const RetexMenu = React.forwardRef(RetexMenu_);
export default RetexMenu;
