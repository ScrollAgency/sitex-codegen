/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 341WB3S6fAjbZggAzyKhr1
// Component: Iobg_4d9SLq2

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 341WB3S6fAjbZggAzyKhr1/projectcss
import sty from "./PlasmicButtonDeconnection.module.css"; // plasmic-import: Iobg_4d9SLq2/css

createPlasmicElementProxy;

export type PlasmicButtonDeconnection__VariantMembers = {
  isActive: "isActive";
};
export type PlasmicButtonDeconnection__VariantsArgs = {
  isActive?: SingleBooleanChoiceArg<"isActive">;
};
type VariantPropType = keyof PlasmicButtonDeconnection__VariantsArgs;
export const PlasmicButtonDeconnection__VariantProps =
  new Array<VariantPropType>("isActive");

export type PlasmicButtonDeconnection__ArgsType = {
  content?: string;
  children?: React.ReactNode;
  link?: string;
};
type ArgPropType = keyof PlasmicButtonDeconnection__ArgsType;
export const PlasmicButtonDeconnection__ArgProps = new Array<ArgPropType>(
  "content",
  "children",
  "link"
);

export type PlasmicButtonDeconnection__OverridesType = {
  root?: Flex__<"div">;
  text?: Flex__<"div">;
};

export interface DefaultButtonDeconnectionProps {
  content?: string;
  children?: React.ReactNode;
  link?: string;
  isActive?: SingleBooleanChoiceArg<"isActive">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicButtonDeconnection__RenderFunc(props: {
  variants: PlasmicButtonDeconnection__VariantsArgs;
  args: PlasmicButtonDeconnection__ArgsType;
  overrides: PlasmicButtonDeconnection__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const $globalActions = useGlobalActions?.();

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "isActive",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isActive
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root,
        { [sty.rootisActive]: hasVariant($state, "isActive", "isActive") }
      )}
      onClick={async event => {
        const $steps = {};

        $steps["invokeGlobalAction"] = true
          ? (() => {
              const actionArgs = { args: ["/"] };
              return $globalActions["SupabaseUserGlobalContext.logout"]?.apply(
                null,
                [...actionArgs.args]
              );
            })()
          : undefined;
        if (
          $steps["invokeGlobalAction"] != null &&
          typeof $steps["invokeGlobalAction"] === "object" &&
          typeof $steps["invokeGlobalAction"].then === "function"
        ) {
          $steps["invokeGlobalAction"] = await $steps["invokeGlobalAction"];
        }
      }}
    >
      {renderPlasmicSlot({
        defaultContents: (
          <svg
            className={classNames(projectcss.all, sty.svg__aQ63F)}
            role={"img"}
          />
        ),

        value: args.children
      })}
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text, {
          [sty.textisActive]: hasVariant($state, "isActive", "isActive")
        })}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.content;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButtonDeconnection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButtonDeconnection__VariantsArgs;
    args?: PlasmicButtonDeconnection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicButtonDeconnection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicButtonDeconnection__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicButtonDeconnection__ArgProps,
          internalVariantPropNames: PlasmicButtonDeconnection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicButtonDeconnection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonDeconnection";
  } else {
    func.displayName = `PlasmicButtonDeconnection.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonDeconnection = Object.assign(
  // Top-level PlasmicButtonDeconnection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicButtonDeconnection
    internalVariantProps: PlasmicButtonDeconnection__VariantProps,
    internalArgProps: PlasmicButtonDeconnection__ArgProps
  }
);

export default PlasmicButtonDeconnection;
/* prettier-ignore-end */
