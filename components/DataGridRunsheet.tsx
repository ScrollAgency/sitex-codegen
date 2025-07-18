// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicDataGridRunsheet,
  DefaultDataGridRunsheetProps
} from "./plasmic/sitex_code_gen/PlasmicDataGridRunsheet";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface DataGridRunsheetProps extends Omit<DefaultDataGridRunsheetProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultDataGridRunsheetProps altogether and have
// total control over the props for your component.
export interface DataGridRunsheetProps extends DefaultDataGridRunsheetProps {}

function DataGridRunsheet_(
  props: DataGridRunsheetProps,
  ref: HTMLElementRefOf<"div">
) {
  // Use PlasmicDataGridRunsheet to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicDataGridRunsheet are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all DataGridRunsheetProps here, but feel free
  // to do whatever works for you.

  return <PlasmicDataGridRunsheet dataGridOperations={{ ref }} {...props} />;
}

const DataGridRunsheet = React.forwardRef(DataGridRunsheet_);
export default DataGridRunsheet;
