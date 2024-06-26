// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: caYJwnGE8e7sjdEDGdZ8Mn
// Component: sqPtJf-a2XF_

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
import sty from "./Plasmic_5CommonQa.module.css"; // plasmic-import: sqPtJf-a2XF_/css

createPlasmicElementProxy;

export type Plasmic_5CommonQa__VariantMembers = {};
export type Plasmic_5CommonQa__VariantsArgs = {};
type VariantPropType = keyof Plasmic_5CommonQa__VariantsArgs;
export const Plasmic_5CommonQa__VariantProps = new Array<VariantPropType>();

export type Plasmic_5CommonQa__ArgsType = {};
type ArgPropType = keyof Plasmic_5CommonQa__ArgsType;
export const Plasmic_5CommonQa__ArgProps = new Array<ArgPropType>();

export type Plasmic_5CommonQa__OverridesType = {
  root?: Flex__<"div">;
};

export interface Default_5CommonQaProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function Plasmic_5CommonQa__RenderFunc(props: {
  variants: Plasmic_5CommonQa__VariantsArgs;
  args: Plasmic_5CommonQa__ArgsType;
  overrides: Plasmic_5CommonQa__OverridesType;
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
        <div className={classNames(projectcss.all, sty.freeBox___7Z3Zv)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___8SMj1
            )}
          >
            {"\u5217\u8868"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__yAf8Z)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__jwJwx)}
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
                sty.text__weetC
              )}
            >
              {"\u9000\u51fa"}
            </div>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__b99YA)}>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__j4XHn)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            loading={"lazy"}
            src={{
              src: "/plasmic/rehab_patient/images/常见问答2Jpg.jpg",
              fullWidth: 1000,
              fullHeight: 500,
              aspectRatio: undefined
            }}
          />
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__pAj3N)}>
          <div
            className={classNames(projectcss.all, sty.freeBox__w1MlZ)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo51PersistInHealth"] = true
                ? (() => {
                    const actionArgs = { destination: `/5-1Persist in health` };
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
                $steps["goTo51PersistInHealth"] != null &&
                typeof $steps["goTo51PersistInHealth"] === "object" &&
                typeof $steps["goTo51PersistInHealth"].then === "function"
              ) {
                $steps["goTo51PersistInHealth"] = await $steps[
                  "goTo51PersistInHealth"
                ];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__eQky)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___7HoU9
                )}
              >
                {"\u575a\u6301\u5eb7\u590d"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox___3OKVt)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo52TrainingMisconceptions"] = true
                ? (() => {
                    const actionArgs = {
                      destination: `/5-2Training misconceptions`
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
                $steps["goTo52TrainingMisconceptions"] != null &&
                typeof $steps["goTo52TrainingMisconceptions"] === "object" &&
                typeof $steps["goTo52TrainingMisconceptions"].then ===
                  "function"
              ) {
                $steps["goTo52TrainingMisconceptions"] = await $steps[
                  "goTo52TrainingMisconceptions"
                ];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__sat6Y)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__hg032
                )}
              >
                {"\u8bad\u7ec3\u8bef\u533a"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__kyecr)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo53PainManagement"] = true
                ? (() => {
                    const actionArgs = { destination: `/5-3Pain management` };
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
                $steps["goTo53PainManagement"] != null &&
                typeof $steps["goTo53PainManagement"] === "object" &&
                typeof $steps["goTo53PainManagement"].then === "function"
              ) {
                $steps["goTo53PainManagement"] = await $steps[
                  "goTo53PainManagement"
                ];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__fiSBj)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___0Rwh
                )}
              >
                {"\u75bc\u75db\u7ba1\u7406"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__fxCHh)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo54IceCompress"] = true
                ? (() => {
                    const actionArgs = { destination: `/5-4Ice compress` };
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
                $steps["goTo54IceCompress"] != null &&
                typeof $steps["goTo54IceCompress"] === "object" &&
                typeof $steps["goTo54IceCompress"].then === "function"
              ) {
                $steps["goTo54IceCompress"] = await $steps["goTo54IceCompress"];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox___5UBDz)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__cpgaJ
                )}
              >
                {"\u8e1d\u626d\u4f24\u5904\u7406"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox___91Izr)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo55AccelerateKneeJointRehabilitation"] = true
                ? (() => {
                    const actionArgs = {
                      destination: `/5-5Accelerate knee joint rehabilitation`
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
                $steps["goTo55AccelerateKneeJointRehabilitation"] != null &&
                typeof $steps["goTo55AccelerateKneeJointRehabilitation"] ===
                  "object" &&
                typeof $steps["goTo55AccelerateKneeJointRehabilitation"]
                  .then === "function"
              ) {
                $steps["goTo55AccelerateKneeJointRehabilitation"] =
                  await $steps["goTo55AccelerateKneeJointRehabilitation"];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__si4Fh)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__bjQr
                )}
              >
                {"\u819d\u5173\u8282\u5eb7\u590d"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__zGgSu)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo56HemiplegicRehabilitation"] = true
                ? (() => {
                    const actionArgs = {
                      destination: `/5-6Hemiplegic rehabilitation`
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
                $steps["goTo56HemiplegicRehabilitation"] != null &&
                typeof $steps["goTo56HemiplegicRehabilitation"] === "object" &&
                typeof $steps["goTo56HemiplegicRehabilitation"].then ===
                  "function"
              ) {
                $steps["goTo56HemiplegicRehabilitation"] = await $steps[
                  "goTo56HemiplegicRehabilitation"
                ];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__kOsrd)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lK9WZ
                )}
              >
                {"\u504f\u762b\u5eb7\u590d"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox___2VHCf)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo57CardiacRehabilitation"] = true
                ? (() => {
                    const actionArgs = {
                      destination: `/5-7Cardiac rehabilitation`
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
                $steps["goTo57CardiacRehabilitation"] != null &&
                typeof $steps["goTo57CardiacRehabilitation"] === "object" &&
                typeof $steps["goTo57CardiacRehabilitation"].then === "function"
              ) {
                $steps["goTo57CardiacRehabilitation"] = await $steps[
                  "goTo57CardiacRehabilitation"
                ];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__iltX)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__g5RBz
                )}
              >
                {"\u5fc3\u810f\u5eb7\u590d"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__itOp4)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo58WalkingWithCrutches"] = true
                ? (() => {
                    const actionArgs = { destination: `/new-page-25` };
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
                $steps["goTo58WalkingWithCrutches"] != null &&
                typeof $steps["goTo58WalkingWithCrutches"] === "object" &&
                typeof $steps["goTo58WalkingWithCrutches"].then === "function"
              ) {
                $steps["goTo58WalkingWithCrutches"] = await $steps[
                  "goTo58WalkingWithCrutches"
                ];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__yCd39)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tCv8
                )}
              >
                {"\u5e26\u62d0\u6756\u8d70\u8def"}
              </div>
            </div>
          </div>
        </div>
        <div
          className={classNames(projectcss.all, sty.freeBox__kzEay)}
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
              sty.text__osDUb
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
  Plasmic_5CommonQa__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic_5CommonQa__VariantsArgs;
    args?: Plasmic_5CommonQa__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<Plasmic_5CommonQa__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      Plasmic_5CommonQa__ArgsType,
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
          internalArgPropNames: Plasmic_5CommonQa__ArgProps,
          internalVariantPropNames: Plasmic_5CommonQa__VariantProps
        }),
      [props, nodeName]
    );
    return Plasmic_5CommonQa__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "Plasmic_5CommonQa";
  } else {
    func.displayName = `Plasmic_5CommonQa.${nodeName}`;
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

export const Plasmic_5CommonQa = Object.assign(
  // Top-level Plasmic_5CommonQa renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for Plasmic_5CommonQa
    internalVariantProps: Plasmic_5CommonQa__VariantProps,
    internalArgProps: Plasmic_5CommonQa__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default Plasmic_5CommonQa;
/* prettier-ignore-end */
