/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 341WB3S6fAjbZggAzyKhr1
// Component: kvtu7IVvZKcp

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

import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import Modal from "../../Modal"; // plasmic-import: 2dhqWpUZxzEb/component
import Button from "../../Button"; // plasmic-import: lcnlii-Mi9bF/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 341WB3S6fAjbZggAzyKhr1/projectcss
import sty from "./PlasmicFile.module.css"; // plasmic-import: kvtu7IVvZKcp/css

import EyeSvgrepoComSvgIcon from "./icons/PlasmicIcon__EyeSvgrepoComSvg"; // plasmic-import: 9ffgVdSgB-g8/icon
import IconPhTrashIcon from "./icons/PlasmicIcon__IconPhTrash"; // plasmic-import: ieZKa4cQud1_/icon
import LinkSimpleIcon from "./icons/PlasmicIcon__LinkSimple"; // plasmic-import: j1hFSwL8QFW8/icon
import XIcon from "./icons/PlasmicIcon__X"; // plasmic-import: Ciiq3-41nfH3/icon
import CircleIcon from "./icons/PlasmicIcon__Circle"; // plasmic-import: GXxwbmvNEgwq/icon
import ChevronDownIcon from "./icons/PlasmicIcon__ChevronDown"; // plasmic-import: t_DMhjzzg7u-/icon

createPlasmicElementProxy;

export type PlasmicFile__VariantMembers = {};
export type PlasmicFile__VariantsArgs = {};
type VariantPropType = keyof PlasmicFile__VariantsArgs;
export const PlasmicFile__VariantProps = new Array<VariantPropType>();

export type PlasmicFile__ArgsType = {
  currentItem?: any;
  fileId?: number;
  onFileIdChange?: (val: string) => void;
  type?: string;
  onTypeChange2?: (val: string) => void;
};
type ArgPropType = keyof PlasmicFile__ArgsType;
export const PlasmicFile__ArgProps = new Array<ArgPropType>(
  "currentItem",
  "fileId",
  "onFileIdChange",
  "type",
  "onTypeChange2"
);

export type PlasmicFile__OverridesType = {
  frame1437253929?: Flex__<"div">;
  text?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  deleteFile2?: Flex__<typeof Modal>;
  frame1437254032?: Flex__<"div">;
  name14?: Flex__<"div">;
  frame1437254033?: Flex__<"div">;
  button?: Flex__<typeof Button>;
};

export interface DefaultFileProps {
  currentItem?: any;
  fileId?: number;
  onFileIdChange?: (val: string) => void;
  type?: string;
  onTypeChange2?: (val: string) => void;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFile__RenderFunc(props: {
  variants: PlasmicFile__VariantsArgs;
  args: PlasmicFile__ArgsType;
  overrides: PlasmicFile__OverridesType;
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
        path: "deleteFile2.isOpen",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state._delete;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()
      },
      {
        path: "_delete",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "fileId",
        type: "writable",
        variableType: "number",

        valueProp: "fileId",
        onChangeProp: "onFileIdChange"
      },
      {
        path: "type",
        type: "writable",
        variableType: "text",

        valueProp: "type",
        onChangeProp: "onTypeChange2"
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
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"frame1437253929"}
      data-plasmic-override={overrides.frame1437253929}
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
        sty.frame1437253929
      )}
      onClick={async event => {
        const $steps = {};

        $steps["runCode"] = true
          ? (() => {
              const actionArgs = {
                customFunction: async () => {
                  return window.open(
                    "https://wrtucmaotoeqjhalofcv.supabase.co/storage/v1/object/public/" +
                      ($props.currentItem.command == true
                        ? "commands/"
                        : "tasks/") +
                      $props.currentItem.attached_file
                  );
                }
              };
              return (({ customFunction }) => {
                return customFunction();
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["runCode"] != null &&
          typeof $steps["runCode"] === "object" &&
          typeof $steps["runCode"].then === "function"
        ) {
          $steps["runCode"] = await $steps["runCode"];
        }
      }}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__gq7Nm)}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.currentItem.attached_file;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "Nomdufichier.pdf";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___43Nb9)}
        >
          <EyeSvgrepoComSvgIcon
            className={classNames(projectcss.all, sty.svg___1DEg4)}
            onClick={async event => {
              const $steps = {};

              $steps["runCode"] = true
                ? (() => {
                    const actionArgs = {
                      customFunction: async () => {
                        return window.open(
                          "https://wrtucmaotoeqjhalofcv.supabase.co/storage/v1/object/public/tasks//" +
                            $props.currentItem.attached_file
                        );
                      }
                    };
                    return (({ customFunction }) => {
                      return customFunction();
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["runCode"] != null &&
                typeof $steps["runCode"] === "object" &&
                typeof $steps["runCode"].then === "function"
              ) {
                $steps["runCode"] = await $steps["runCode"];
              }
            }}
            role={"img"}
          />

          <IconPhTrashIcon
            className={classNames(projectcss.all, sty.svg__s2AvA)}
            onClick={async event => {
              const $steps = {};

              $steps["runCode"] = true
                ? (() => {
                    const actionArgs = {
                      customFunction: async () => {
                        return event.stopPropagation();
                      }
                    };
                    return (({ customFunction }) => {
                      return customFunction();
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["runCode"] != null &&
                typeof $steps["runCode"] === "object" &&
                typeof $steps["runCode"].then === "function"
              ) {
                $steps["runCode"] = await $steps["runCode"];
              }

              $steps["updateDelete"] = true
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["_delete"]
                      },
                      operation: 0,
                      value: true
                    };
                    return (({ variable, value, startIndex, deleteCount }) => {
                      if (!variable) {
                        return;
                      }
                      const { objRoot, variablePath } = variable;

                      $stateSet(objRoot, variablePath, value);
                      return value;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateDelete"] != null &&
                typeof $steps["updateDelete"] === "object" &&
                typeof $steps["updateDelete"].then === "function"
              ) {
                $steps["updateDelete"] = await $steps["updateDelete"];
              }

              $steps["updateFileId"] = true
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["fileId"]
                      },
                      operation: 0,
                      value: $state.fileId
                    };
                    return (({ variable, value, startIndex, deleteCount }) => {
                      if (!variable) {
                        return;
                      }
                      const { objRoot, variablePath } = variable;

                      $stateSet(objRoot, variablePath, value);
                      return value;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateFileId"] != null &&
                typeof $steps["updateFileId"] === "object" &&
                typeof $steps["updateFileId"].then === "function"
              ) {
                $steps["updateFileId"] = await $steps["updateFileId"];
              }
            }}
            role={"img"}
          />
        </Stack__>
      </Stack__>
      <div className={classNames(projectcss.all, sty.freeBox__hAf6)}>
        <PlasmicImg__
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"auto"}
          displayMaxHeight={"80px"}
          displayMaxWidth={"80px"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          loading={"lazy"}
          src={(() => {
            try {
              return (
                "https://wrtucmaotoeqjhalofcv.supabase.co/storage/v1/object/public/tasks/" +
                $props.currentItem.attached_file.replace(/ /g, "%20")
              );
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return {
                  src: "/plasmic/sitex_code_gen/images/pictoSvg.svg",
                  fullWidth: 19,
                  fullHeight: 35,
                  aspectRatio: 0.542857
                };
              }
              throw e;
            }
          })()}
        />
      </div>
      <Modal
        data-plasmic-name={"deleteFile2"}
        data-plasmic-override={overrides.deleteFile2}
        className={classNames("__wab_instance", sty.deleteFile2)}
        closeOnBackdropClick={true}
        content={
          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button)}
            color={"errorDestructive"}
            disabled={(() => {
              try {
                return $state.fileId == 0;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return undefined;
                }
                throw e;
              }
            })()}
            label={"Supprimer"}
            onClick={async event => {
              const $steps = {};

              $steps["deleteOperation"] = true
                ? (() => {
                    const actionArgs = {
                      dataOp: {
                        sourceId: "v6umJuHyep6kPNyCAJjouT",
                        opId: "4c209788-c087-41f9-8e65-3a3324edbcb0",
                        userArgs: {
                          conditions: [$state.fileId]
                        },
                        cacheKey: null,
                        invalidatedKeys: [
                          "131797d4-fe96-49f4-8d74-de7dbc1b9618",
                          "ebbc3c45-b7c8-4c2d-b2cd-4eb75f11d96b",
                          "bbc046fa-9e23-4163-bb6f-732f7e5d160f"
                        ],
                        roleId: null
                      }
                    };
                    return (async ({ dataOp, continueOnError }) => {
                      try {
                        const response = await executePlasmicDataOp(dataOp, {
                          userAuthToken: dataSourcesCtx?.userAuthToken,
                          user: dataSourcesCtx?.user
                        });
                        await plasmicInvalidate(dataOp.invalidatedKeys);
                        return response;
                      } catch (e) {
                        if (!continueOnError) {
                          throw e;
                        }
                        return e;
                      }
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["deleteOperation"] != null &&
                typeof $steps["deleteOperation"] === "object" &&
                typeof $steps["deleteOperation"].then === "function"
              ) {
                $steps["deleteOperation"] = await $steps["deleteOperation"];
              }

              $steps["updateDelete"] = true
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["_delete"]
                      },
                      operation: 0,
                      value: false
                    };
                    return (({ variable, value, startIndex, deleteCount }) => {
                      if (!variable) {
                        return;
                      }
                      const { objRoot, variablePath } = variable;

                      $stateSet(objRoot, variablePath, value);
                      return value;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateDelete"] != null &&
                typeof $steps["updateDelete"] === "object" &&
                typeof $steps["updateDelete"].then === "function"
              ) {
                $steps["updateDelete"] = await $steps["updateDelete"];
              }
            }}
            submitsForm={false}
          />
        }
        footer={
          <div className={classNames(projectcss.all, sty.freeBox__yQfz)} />
        }
        heading={
          <Stack__
            as={"div"}
            data-plasmic-name={"frame1437254032"}
            data-plasmic-override={overrides.frame1437254032}
            hasGap={true}
            className={classNames(projectcss.all, sty.frame1437254032)}
          >
            <div
              data-plasmic-name={"name14"}
              data-plasmic-override={overrides.name14}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.name14
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return "Êtes-vous sûr(e) ?";
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "Supprimer";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
            <Stack__
              as={"div"}
              data-plasmic-name={"frame1437254033"}
              data-plasmic-override={overrides.frame1437254033}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame1437254033)}
            >
              <LinkSimpleIcon
                className={classNames(projectcss.all, sty.svg___4HgiO)}
                role={"img"}
              />

              <XIcon
                className={classNames(projectcss.all, sty.svg__sp5Fc)}
                onClick={async event => {
                  const $steps = {};

                  $steps["runCode"] = true
                    ? (() => {
                        const actionArgs = {
                          customFunction: async () => {
                            return event.stopPropagation();
                          }
                        };
                        return (({ customFunction }) => {
                          return customFunction();
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["runCode"] != null &&
                    typeof $steps["runCode"] === "object" &&
                    typeof $steps["runCode"].then === "function"
                  ) {
                    $steps["runCode"] = await $steps["runCode"];
                  }

                  $steps["updateDelete"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["_delete"]
                          },
                          operation: 0,
                          value: false
                        };
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;

                          $stateSet(objRoot, variablePath, value);
                          return value;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["updateDelete"] != null &&
                    typeof $steps["updateDelete"] === "object" &&
                    typeof $steps["updateDelete"].then === "function"
                  ) {
                    $steps["updateDelete"] = await $steps["updateDelete"];
                  }
                }}
                role={"img"}
              />
            </Stack__>
          </Stack__>
        }
        isOpen={generateStateValueProp($state, ["deleteFile2", "isOpen"])}
        noTrigger={true}
        onOpenChange={async (...eventArgs: any) => {
          generateStateOnChangeProp($state, ["deleteFile2", "isOpen"]).apply(
            null,
            eventArgs
          );

          if (
            eventArgs.length > 1 &&
            eventArgs[1] &&
            eventArgs[1]._plasmic_state_init_
          ) {
            return;
          }

          (async val => {
            const $steps = {};

            $steps["updateDelete"] = true
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["_delete"]
                    },
                    operation: 4
                  };
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;

                    const oldValue = $stateGet(objRoot, variablePath);
                    $stateSet(objRoot, variablePath, !oldValue);
                    return !oldValue;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateDelete"] != null &&
              typeof $steps["updateDelete"] === "object" &&
              typeof $steps["updateDelete"].then === "function"
            ) {
              $steps["updateDelete"] = await $steps["updateDelete"];
            }
          }).apply(null, eventArgs);
        }}
        showFooter={false}
        trigger={null}
      />
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  frame1437253929: [
    "frame1437253929",
    "text",
    "img",
    "deleteFile2",
    "frame1437254032",
    "name14",
    "frame1437254033",
    "button"
  ],
  text: ["text"],
  img: ["img"],
  deleteFile2: [
    "deleteFile2",
    "frame1437254032",
    "name14",
    "frame1437254033",
    "button"
  ],
  frame1437254032: ["frame1437254032", "name14", "frame1437254033"],
  name14: ["name14"],
  frame1437254033: ["frame1437254033"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  frame1437253929: "div";
  text: "div";
  img: typeof PlasmicImg__;
  deleteFile2: typeof Modal;
  frame1437254032: "div";
  name14: "div";
  frame1437254033: "div";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFile__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFile__VariantsArgs;
    args?: PlasmicFile__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFile__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFile__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicFile__ArgProps,
          internalVariantPropNames: PlasmicFile__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFile__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "frame1437253929") {
    func.displayName = "PlasmicFile";
  } else {
    func.displayName = `PlasmicFile.${nodeName}`;
  }
  return func;
}

export const PlasmicFile = Object.assign(
  // Top-level PlasmicFile renders the root element
  makeNodeComponent("frame1437253929"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    img: makeNodeComponent("img"),
    deleteFile2: makeNodeComponent("deleteFile2"),
    frame1437254032: makeNodeComponent("frame1437254032"),
    name14: makeNodeComponent("name14"),
    frame1437254033: makeNodeComponent("frame1437254033"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicFile
    internalVariantProps: PlasmicFile__VariantProps,
    internalArgProps: PlasmicFile__ArgProps
  }
);

export default PlasmicFile;
/* prettier-ignore-end */
