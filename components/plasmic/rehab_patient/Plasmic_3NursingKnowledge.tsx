// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: caYJwnGE8e7sjdEDGdZ8Mn
// Component: XP7ERyRItwEc

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
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: caYJwnGE8e7sjdEDGdZ8Mn/projectcss
import sty from "./Plasmic_3NursingKnowledge.module.css"; // plasmic-import: XP7ERyRItwEc/css

createPlasmicElementProxy;

export type Plasmic_3NursingKnowledge__VariantMembers = {};
export type Plasmic_3NursingKnowledge__VariantsArgs = {};
type VariantPropType = keyof Plasmic_3NursingKnowledge__VariantsArgs;
export const Plasmic_3NursingKnowledge__VariantProps =
  new Array<VariantPropType>();

export type Plasmic_3NursingKnowledge__ArgsType = {};
type ArgPropType = keyof Plasmic_3NursingKnowledge__ArgsType;
export const Plasmic_3NursingKnowledge__ArgProps = new Array<ArgPropType>();

export type Plasmic_3NursingKnowledge__OverridesType = {
  root?: Flex__<"div">;
};

export interface Default_3NursingKnowledgeProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function Plasmic_3NursingKnowledge__RenderFunc(props: {
  variants: Plasmic_3NursingKnowledge__VariantsArgs;
  args: Plasmic_3NursingKnowledge__ArgsType;
  overrides: Plasmic_3NursingKnowledge__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

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
          plasmic_plasmic_rich_components_css.plasmic_tokens,
          sty.root
        )}
      >
        <div className={classNames(projectcss.all, sty.freeBox___2MWwS)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__axtnC
            )}
          >
            {"\u5217\u8868"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__mGWq)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__lussr)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"25%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              onClick={async event => {
                const $steps = {};

                $steps["goTo00LoginPage"] = true
                  ? (() => {
                      const actionArgs = { destination: `/` };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goTo00LoginPage"] != null &&
                  typeof $steps["goTo00LoginPage"] === "object" &&
                  typeof $steps["goTo00LoginPage"].then === "function"
                ) {
                  $steps["goTo00LoginPage"] = await $steps["goTo00LoginPage"];
                }
              }}
              src={{
                src: "/plasmic/rehab_patient/images/资源162Xpng.png",
                fullWidth: 198,
                fullHeight: 198,
                aspectRatio: undefined
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__iHwoB
              )}
            >
              {"\u9000\u51fa"}
            </div>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__foTFb)}>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__m1Nfk)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            loading={"lazy"}
            src={{
              src: "/plasmic/rehab_patient/images/护理知识png.png",
              fullWidth: 1000,
              fullHeight: 500,
              aspectRatio: undefined
            }}
          />
        </div>
        <div className={classNames(projectcss.all, sty.freeBox___9PyxD)}>
          <div
            className={classNames(projectcss.all, sty.freeBox__b04AI)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo31PreventPressureUlcers"] = true
                ? (() => {
                    const actionArgs = {
                      destination: `/3-1Prevent pressure ulcers`
                    };
                    return (({ destination }) => {
                      if (
                        typeof destination === "string" &&
                        destination.startsWith("#")
                      ) {
                        document
                          .getElementById(destination.substr(1))
                          .scrollIntoView({ behavior: "smooth" });
                      } else {
                        __nextRouter?.push(destination);
                      }
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["goTo31PreventPressureUlcers"] != null &&
                typeof $steps["goTo31PreventPressureUlcers"] === "object" &&
                typeof $steps["goTo31PreventPressureUlcers"].then === "function"
              ) {
                $steps["goTo31PreventPressureUlcers"] = await $steps[
                  "goTo31PreventPressureUlcers"
                ];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__zimBm)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xi2Kq
                )}
              >
                {"\u9884\u9632\u538b\u75ae"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__unNrZ)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo32PreventingThrombosis"] = true
                ? (() => {
                    const actionArgs = {
                      destination: `/3-2Preventing Thrombosis`
                    };
                    return (({ destination }) => {
                      if (
                        typeof destination === "string" &&
                        destination.startsWith("#")
                      ) {
                        document
                          .getElementById(destination.substr(1))
                          .scrollIntoView({ behavior: "smooth" });
                      } else {
                        __nextRouter?.push(destination);
                      }
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["goTo32PreventingThrombosis"] != null &&
                typeof $steps["goTo32PreventingThrombosis"] === "object" &&
                typeof $steps["goTo32PreventingThrombosis"].then === "function"
              ) {
                $steps["goTo32PreventingThrombosis"] = await $steps[
                  "goTo32PreventingThrombosis"
                ];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__ndxjg)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__r2SU
                )}
              >
                {"\u9884\u9632\u8840\u6813"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__qeqI)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo33PreventingFallsAndFallingFromTheBed"] = true
                ? (() => {
                    const actionArgs = {
                      destination: `/3-3Preventing falls and falling from the bed`
                    };
                    return (({ destination }) => {
                      if (
                        typeof destination === "string" &&
                        destination.startsWith("#")
                      ) {
                        document
                          .getElementById(destination.substr(1))
                          .scrollIntoView({ behavior: "smooth" });
                      } else {
                        __nextRouter?.push(destination);
                      }
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["goTo33PreventingFallsAndFallingFromTheBed"] != null &&
                typeof $steps["goTo33PreventingFallsAndFallingFromTheBed"] ===
                  "object" &&
                typeof $steps["goTo33PreventingFallsAndFallingFromTheBed"]
                  .then === "function"
              ) {
                $steps["goTo33PreventingFallsAndFallingFromTheBed"] =
                  await $steps["goTo33PreventingFallsAndFallingFromTheBed"];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__ef8D)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__snjh
                )}
              >
                {"\u9884\u9632\u8dcc\u5012\u5760\u5e8a"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__ud3XN)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo34TreatmentOfEsophagealForeignBodies"] = true
                ? (() => {
                    const actionArgs = {
                      destination: `/3-4Treatment of esophageal foreign bodies`
                    };
                    return (({ destination }) => {
                      if (
                        typeof destination === "string" &&
                        destination.startsWith("#")
                      ) {
                        document
                          .getElementById(destination.substr(1))
                          .scrollIntoView({ behavior: "smooth" });
                      } else {
                        __nextRouter?.push(destination);
                      }
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["goTo34TreatmentOfEsophagealForeignBodies"] != null &&
                typeof $steps["goTo34TreatmentOfEsophagealForeignBodies"] ===
                  "object" &&
                typeof $steps["goTo34TreatmentOfEsophagealForeignBodies"]
                  .then === "function"
              ) {
                $steps["goTo34TreatmentOfEsophagealForeignBodies"] =
                  await $steps["goTo34TreatmentOfEsophagealForeignBodies"];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__gZZvD)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ty2Gu
                )}
              >
                {"\u98df\u7ba1\u5f02\u7269\u5904\u7406"}
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__wfXQo)}>
            <div
              className={classNames(projectcss.all, sty.freeBox__battk)}
              onClick={async event => {
                const $steps = {};

                $steps["goTo35PiccTubePlacementProcessing"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: `/3-5PICC tube placement processing`
                      };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goTo35PiccTubePlacementProcessing"] != null &&
                  typeof $steps["goTo35PiccTubePlacementProcessing"] ===
                    "object" &&
                  typeof $steps["goTo35PiccTubePlacementProcessing"].then ===
                    "function"
                ) {
                  $steps["goTo35PiccTubePlacementProcessing"] = await $steps[
                    "goTo35PiccTubePlacementProcessing"
                  ];
                }
              }}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xfgEb
                )}
              >
                {"PICC\u7f6e\u7ba1\u5904\u7406"}
              </div>
            </div>
          </div>
        </div>
        <div
          className={classNames(projectcss.all, sty.freeBox__lyItx)}
          onClick={async event => {
            const $steps = {};

            $steps["goToHome"] = true
              ? (() => {
                  const actionArgs = { destination: `/Home` };
                  return (({ destination }) => {
                    if (
                      typeof destination === "string" &&
                      destination.startsWith("#")
                    ) {
                      document
                        .getElementById(destination.substr(1))
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      __nextRouter?.push(destination);
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["goToHome"] != null &&
              typeof $steps["goToHome"] === "object" &&
              typeof $steps["goToHome"].then === "function"
            ) {
              $steps["goToHome"] = await $steps["goToHome"];
            }
          }}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___9ON2R
            )}
          >
            {"\u8fd4\u56de"}
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  Plasmic_3NursingKnowledge__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic_3NursingKnowledge__VariantsArgs;
    args?: Plasmic_3NursingKnowledge__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<Plasmic_3NursingKnowledge__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      Plasmic_3NursingKnowledge__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
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
          internalArgPropNames: Plasmic_3NursingKnowledge__ArgProps,
          internalVariantPropNames: Plasmic_3NursingKnowledge__VariantProps
        }),
      [props, nodeName]
    );
    return Plasmic_3NursingKnowledge__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "Plasmic_3NursingKnowledge";
  } else {
    func.displayName = `Plasmic_3NursingKnowledge.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const PageGuard: React.FC<P> = props => (
    <PlasmicPageGuard__
      minRole={null}
      appId={"caYJwnGE8e7sjdEDGdZ8Mn"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </PlasmicPageGuard__>
  );

  return PageGuard;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "caYJwnGE8e7sjdEDGdZ8Mn"
    });

    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const Plasmic_3NursingKnowledge = Object.assign(
  // Top-level Plasmic_3NursingKnowledge renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for Plasmic_3NursingKnowledge
    internalVariantProps: Plasmic_3NursingKnowledge__VariantProps,
    internalArgProps: Plasmic_3NursingKnowledge__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default Plasmic_3NursingKnowledge;
/* prettier-ignore-end */