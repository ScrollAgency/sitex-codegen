/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 341WB3S6fAjbZggAzyKhr1
// Component: t3UNk4cyoFOJ

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
import sty from "./PlasmicStatutOperation.module.css"; // plasmic-import: t3UNk4cyoFOJ/css

createPlasmicElementProxy;

export type PlasmicStatutOperation__VariantMembers = {
  aPlanifier: "aPlanifier";
  aEngager: "aEngager";
  enCours: "enCours";
  classe: "classe";
};
export type PlasmicStatutOperation__VariantsArgs = {
  aPlanifier?: SingleBooleanChoiceArg<"aPlanifier">;
  aEngager?: SingleBooleanChoiceArg<"aEngager">;
  enCours?: SingleBooleanChoiceArg<"enCours">;
  classe?: SingleBooleanChoiceArg<"classe">;
};
type VariantPropType = keyof PlasmicStatutOperation__VariantsArgs;
export const PlasmicStatutOperation__VariantProps = new Array<VariantPropType>(
  "aPlanifier",
  "aEngager",
  "enCours",
  "classe"
);

export type PlasmicStatutOperation__ArgsType = {};
type ArgPropType = keyof PlasmicStatutOperation__ArgsType;
export const PlasmicStatutOperation__ArgProps = new Array<ArgPropType>();

export type PlasmicStatutOperation__OverridesType = {
  root?: Flex__<"div">;
  text?: Flex__<"div">;
};

export interface DefaultStatutOperationProps {
  aPlanifier?: SingleBooleanChoiceArg<"aPlanifier">;
  aEngager?: SingleBooleanChoiceArg<"aEngager">;
  enCours?: SingleBooleanChoiceArg<"enCours">;
  classe?: SingleBooleanChoiceArg<"classe">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicStatutOperation__RenderFunc(props: {
  variants: PlasmicStatutOperation__VariantsArgs;
  args: PlasmicStatutOperation__ArgsType;
  overrides: PlasmicStatutOperation__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "aPlanifier",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.aPlanifier
      },
      {
        path: "aEngager",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.aEngager
      },
      {
        path: "enCours",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.enCours
      },
      {
        path: "classe",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.classe
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
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootaEngager]: hasVariant($state, "aEngager", "aEngager"),
          [sty.rootaPlanifier]: hasVariant($state, "aPlanifier", "aPlanifier"),
          [sty.rootclasse]: hasVariant($state, "classe", "classe"),
          [sty.rootenCours]: hasVariant($state, "enCours", "enCours")
        }
      )}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text, {
          [sty.textaEngager]: hasVariant($state, "aEngager", "aEngager"),
          [sty.textaPlanifier]: hasVariant($state, "aPlanifier", "aPlanifier"),
          [sty.textclasse]: hasVariant($state, "classe", "classe"),
          [sty.textenCours]: hasVariant($state, "enCours", "enCours")
        })}
      >
        {hasVariant($state, "classe", "classe")
          ? "Class\u00e9"
          : hasVariant($state, "enCours", "enCours")
          ? "En cours"
          : hasVariant($state, "aEngager", "aEngager")
          ? "\u00c0 engager"
          : hasVariant($state, "aPlanifier", "aPlanifier")
          ? "\u00c0 planifier"
          : "Non cat\u00e9goris\u00e9"}
      </div>
    </div>
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
  PlasmicStatutOperation__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicStatutOperation__VariantsArgs;
    args?: PlasmicStatutOperation__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicStatutOperation__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicStatutOperation__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicStatutOperation__ArgProps,
          internalVariantPropNames: PlasmicStatutOperation__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicStatutOperation__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicStatutOperation";
  } else {
    func.displayName = `PlasmicStatutOperation.${nodeName}`;
  }
  return func;
}

export const PlasmicStatutOperation = Object.assign(
  // Top-level PlasmicStatutOperation renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicStatutOperation
    internalVariantProps: PlasmicStatutOperation__VariantProps,
    internalArgProps: PlasmicStatutOperation__ArgProps
  }
);

export default PlasmicStatutOperation;
/* prettier-ignore-end */
