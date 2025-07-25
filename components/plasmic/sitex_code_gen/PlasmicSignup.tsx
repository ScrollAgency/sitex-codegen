/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 341WB3S6fAjbZggAzyKhr1
// Component: VbduCGwqveeL

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

import { SignUp } from "../../../plasmic-library/authentication/SignUp"; // plasmic-import: dOr8wVN_p-X7/codeComponent

import { useScreenVariants as useScreenVariantsjdkNhxaWnKvk } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: JdkNHXAWnKVK/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 341WB3S6fAjbZggAzyKhr1/projectcss
import sty from "./PlasmicSignup.module.css"; // plasmic-import: VbduCGwqveeL/css

import Ellipse187Icon from "./icons/PlasmicIcon__Ellipse187"; // plasmic-import: HCPsunS-fmP6/icon
import Ellipse192Icon from "./icons/PlasmicIcon__Ellipse192"; // plasmic-import: RdQSueESMBau/icon
import ChevronDownIcon from "./icons/PlasmicIcon__ChevronDown"; // plasmic-import: t_DMhjzzg7u-/icon

createPlasmicElementProxy;

export type PlasmicSignup__VariantMembers = {};
export type PlasmicSignup__VariantsArgs = {};
type VariantPropType = keyof PlasmicSignup__VariantsArgs;
export const PlasmicSignup__VariantProps = new Array<VariantPropType>();

export type PlasmicSignup__ArgsType = {};
type ArgPropType = keyof PlasmicSignup__ArgsType;
export const PlasmicSignup__ArgProps = new Array<ArgPropType>();

export type PlasmicSignup__OverridesType = {
  root?: Flex__<"div">;
  global?: Flex__<"div">;
  premiereConnexion?: Flex__<"div">;
  logo?: Flex__<"div">;
  imageLogo?: Flex__<"div">;
  frame65?: Flex__<"div">;
  rectangle136?: Flex__<"div">;
  frame67?: Flex__<"div">;
  rectangle137?: Flex__<"div">;
  loadingSignup?: Flex__<"div">;
  signUpForm?: Flex__<typeof SignUp>;
  successSignup?: Flex__<"div">;
};

export interface DefaultSignupProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSignup__RenderFunc(props: {
  variants: PlasmicSignup__VariantsArgs;
  args: PlasmicSignup__ArgsType;
  overrides: PlasmicSignup__OverridesType;
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
        path: "signUpForm.email",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "signUpForm.firstName",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "signUpForm.lastName",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "signUpForm.password",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "signUpForm.confirmPassword",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "signUpForm.phone",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "signUpForm.countryCode",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "+33"
      },
      {
        path: "refresh",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsjdkNhxaWnKvk()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
            sty.root
          )}
        >
          <div
            data-plasmic-name={"global"}
            data-plasmic-override={overrides.global}
            className={classNames(projectcss.all, sty.global)}
          >
            <div
              data-plasmic-name={"premiereConnexion"}
              data-plasmic-override={overrides.premiereConnexion}
              className={classNames(projectcss.all, sty.premiereConnexion)}
            >
              <div
                data-plasmic-name={"logo"}
                data-plasmic-override={overrides.logo}
                className={classNames(projectcss.all, sty.logo)}
              >
                <div
                  data-plasmic-name={"imageLogo"}
                  data-plasmic-override={overrides.imageLogo}
                  className={classNames(projectcss.all, sty.imageLogo)}
                >
                  <div
                    data-plasmic-name={"frame65"}
                    data-plasmic-override={overrides.frame65}
                    className={classNames(projectcss.all, sty.frame65)}
                  >
                    <div
                      data-plasmic-name={"rectangle136"}
                      data-plasmic-override={overrides.rectangle136}
                      className={classNames(projectcss.all, sty.rectangle136)}
                    />
                  </div>
                  <div
                    data-plasmic-name={"frame67"}
                    data-plasmic-override={overrides.frame67}
                    className={classNames(projectcss.all, sty.frame67)}
                  >
                    <div
                      data-plasmic-name={"rectangle137"}
                      data-plasmic-override={overrides.rectangle137}
                      className={classNames(projectcss.all, sty.rectangle137)}
                    />

                    <Ellipse187Icon
                      className={classNames(projectcss.all, sty.svg__yq3Ki)}
                      role={"img"}
                    />

                    <Ellipse192Icon
                      className={classNames(projectcss.all, sty.svg__xEnMr)}
                      role={"img"}
                    />
                  </div>
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__tvS2
                  )}
                >
                  {"Sitex"}
                </div>
              </div>
            </div>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___4GOmo)}
            >
              {(() => {
                try {
                  return $ctx.query.signup !== "success";
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return true;
                  }
                  throw e;
                }
              })() ? (
                <div
                  data-plasmic-name={"loadingSignup"}
                  data-plasmic-override={overrides.loadingSignup}
                  className={classNames(projectcss.all, sty.loadingSignup)}
                >
                  <SignUp
                    data-plasmic-name={"signUpForm"}
                    data-plasmic-override={overrides.signUpForm}
                    alertPosition={"top"}
                    appleButtonText={"APPLE"}
                    buttonAbordStyle={"tertiary"}
                    buttonStyle={"primary"}
                    className={classNames("__wab_instance", sty.signUpForm)}
                    confirmPassword={generateStateValueProp($state, [
                      "signUpForm",
                      "confirmPassword"
                    ])}
                    confirmPasswordLabel={"Répétez le mot de passe"}
                    countryCode={generateStateValueProp($state, [
                      "signUpForm",
                      "countryCode"
                    ])}
                    email={generateStateValueProp($state, [
                      "signUpForm",
                      "email"
                    ])}
                    emailLabel={"Email"}
                    eyeIconColor={"#666"}
                    firstName={generateStateValueProp($state, [
                      "signUpForm",
                      "firstName"
                    ])}
                    firstNameLabel={"Prénom"}
                    googleButtonText={"GOOGLE"}
                    inputStyle={"simple"}
                    lastName={generateStateValueProp($state, [
                      "signUpForm",
                      "lastName"
                    ])}
                    lastNameLabel={"Nom"}
                    maxAlerts={3}
                    oAuthButtonsPosition={"bottom"}
                    oAuthSeparatorText={"ou"}
                    onConfirmPasswordChange={async (...eventArgs: any) => {
                      generateStateOnChangeProp($state, [
                        "signUpForm",
                        "confirmPassword"
                      ]).apply(null, eventArgs);
                    }}
                    onCountryCodeChange={async (...eventArgs: any) => {
                      generateStateOnChangeProp($state, [
                        "signUpForm",
                        "countryCode"
                      ]).apply(null, eventArgs);
                    }}
                    onEmailChange={async (...eventArgs: any) => {
                      generateStateOnChangeProp($state, [
                        "signUpForm",
                        "email"
                      ]).apply(null, eventArgs);
                    }}
                    onFirstNameChange={async (...eventArgs: any) => {
                      generateStateOnChangeProp($state, [
                        "signUpForm",
                        "firstName"
                      ]).apply(null, eventArgs);
                    }}
                    onLastNameChange={async (...eventArgs: any) => {
                      generateStateOnChangeProp($state, [
                        "signUpForm",
                        "lastName"
                      ]).apply(null, eventArgs);
                    }}
                    onPasswordChange={async (...eventArgs: any) => {
                      generateStateOnChangeProp($state, [
                        "signUpForm",
                        "password"
                      ]).apply(null, eventArgs);
                    }}
                    onPhoneChange={async (...eventArgs: any) => {
                      generateStateOnChangeProp($state, [
                        "signUpForm",
                        "phone"
                      ]).apply(null, eventArgs);
                    }}
                    onSubmit={async event => {
                      const $steps = {};

                      $steps["invokeGlobalAction"] = true
                        ? (() => {
                            const actionArgs = {
                              args: [
                                (() => {
                                  try {
                                    return $state.signUpForm.email;
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return undefined;
                                    }
                                    throw e;
                                  }
                                })(),
                                (() => {
                                  try {
                                    return $state.signUpForm.password;
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return undefined;
                                    }
                                    throw e;
                                  }
                                })(),
                                (() => {
                                  try {
                                    return "/signup?signup=success";
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return undefined;
                                    }
                                    throw e;
                                  }
                                })(),
                                ``,
                                (() => {
                                  try {
                                    return {
                                      first_name: $state.signUpForm.firstName,
                                      last_name: $state.signUpForm.lastName
                                    };
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return undefined;
                                    }
                                    throw e;
                                  }
                                })()
                              ]
                            };
                            return $globalActions[
                              "SupabaseUserGlobalContext.signup"
                            ]?.apply(null, [...actionArgs.args]);
                          })()
                        : undefined;
                      if (
                        $steps["invokeGlobalAction"] != null &&
                        typeof $steps["invokeGlobalAction"] === "object" &&
                        typeof $steps["invokeGlobalAction"].then === "function"
                      ) {
                        $steps["invokeGlobalAction"] = await $steps[
                          "invokeGlobalAction"
                        ];
                      }
                    }}
                    password={generateStateValueProp($state, [
                      "signUpForm",
                      "password"
                    ])}
                    passwordInfoText={
                      "Utilisez 8 caractères ou plus en mélangeant lettres, chiffres et symboles."
                    }
                    passwordLabel={"Mot de passe"}
                    phone={generateStateValueProp($state, [
                      "signUpForm",
                      "phone"
                    ])}
                    phoneLabel={"Téléphone"}
                    placeholderConfirmPassword={"Confirmez votre mot de passe"}
                    placeholderEmail={"Entrez votre email"}
                    placeholderPassword={"Entrez votre mot de passe"}
                    placeholderPhone={"060606060606"}
                    privacyPolicyText={
                      "J'accepte la politique de confidentialité"
                    }
                    privacyPolicyUrl={"https://sitex-app.fr/"}
                    redirectAfterSignUp={"/"}
                    showAlerts={true}
                    showLabels={true}
                    showLoginLink={true}
                    showOAuthButtons={false}
                    showPasswordStrength={true}
                    showPasswordToggle={true}
                    showPhone={false}
                    showPrivacyPolicy={true}
                    submitButtonText={"S'inscrire"}
                    title={"Bienvenue !"}
                    titleHeading={"h1"}
                    wrapperStyle={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "div"
                        : "card"
                    }
                  />
                </div>
              ) : null}
              {(() => {
                try {
                  return $ctx.query.signup === "success";
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return true;
                  }
                  throw e;
                }
              })() ? (
                <Stack__
                  as={"div"}
                  data-plasmic-name={"successSignup"}
                  data-plasmic-override={overrides.successSignup}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.successSignup)}
                >
                  <ChevronDownIcon
                    className={classNames(projectcss.all, sty.svg__uCo7)}
                    role={"img"}
                  />

                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__eZmuy)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__zldwb
                      )}
                    >
                      {
                        "Votre compte a \u00e9t\u00e9 cr\u00e9\u00e9 avec succ\u00e8s"
                      }
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__yg6D
                      )}
                    >
                      {
                        "Veuillez v\u00e9rifier vos e-mails pour confirmer votre adresse\net acc\u00e9der \u00e0 Sitex"
                      }
                    </div>
                  </Stack__>
                </Stack__>
              ) : null}
            </Stack__>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "global",
    "premiereConnexion",
    "logo",
    "imageLogo",
    "frame65",
    "rectangle136",
    "frame67",
    "rectangle137",
    "loadingSignup",
    "signUpForm",
    "successSignup"
  ],
  global: [
    "global",
    "premiereConnexion",
    "logo",
    "imageLogo",
    "frame65",
    "rectangle136",
    "frame67",
    "rectangle137",
    "loadingSignup",
    "signUpForm",
    "successSignup"
  ],
  premiereConnexion: [
    "premiereConnexion",
    "logo",
    "imageLogo",
    "frame65",
    "rectangle136",
    "frame67",
    "rectangle137"
  ],
  logo: [
    "logo",
    "imageLogo",
    "frame65",
    "rectangle136",
    "frame67",
    "rectangle137"
  ],
  imageLogo: [
    "imageLogo",
    "frame65",
    "rectangle136",
    "frame67",
    "rectangle137"
  ],
  frame65: ["frame65", "rectangle136"],
  rectangle136: ["rectangle136"],
  frame67: ["frame67", "rectangle137"],
  rectangle137: ["rectangle137"],
  loadingSignup: ["loadingSignup", "signUpForm"],
  signUpForm: ["signUpForm"],
  successSignup: ["successSignup"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  global: "div";
  premiereConnexion: "div";
  logo: "div";
  imageLogo: "div";
  frame65: "div";
  rectangle136: "div";
  frame67: "div";
  rectangle137: "div";
  loadingSignup: "div";
  signUpForm: typeof SignUp;
  successSignup: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSignup__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSignup__VariantsArgs;
    args?: PlasmicSignup__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSignup__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSignup__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicSignup__ArgProps,
          internalVariantPropNames: PlasmicSignup__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSignup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignup";
  } else {
    func.displayName = `PlasmicSignup.${nodeName}`;
  }
  return func;
}

export const PlasmicSignup = Object.assign(
  // Top-level PlasmicSignup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    global: makeNodeComponent("global"),
    premiereConnexion: makeNodeComponent("premiereConnexion"),
    logo: makeNodeComponent("logo"),
    imageLogo: makeNodeComponent("imageLogo"),
    frame65: makeNodeComponent("frame65"),
    rectangle136: makeNodeComponent("rectangle136"),
    frame67: makeNodeComponent("frame67"),
    rectangle137: makeNodeComponent("rectangle137"),
    loadingSignup: makeNodeComponent("loadingSignup"),
    signUpForm: makeNodeComponent("signUpForm"),
    successSignup: makeNodeComponent("successSignup"),

    // Metadata about props expected for PlasmicSignup
    internalVariantProps: PlasmicSignup__VariantProps,
    internalArgProps: PlasmicSignup__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSignup;
/* prettier-ignore-end */
