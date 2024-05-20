// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: caYJwnGE8e7sjdEDGdZ8Mn
// Component: S9n513CcjZ1s

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
import sty from "./Plasmic_4Nutritionknowledge.module.css"; // plasmic-import: S9n513CcjZ1s/css

createPlasmicElementProxy;

export type Plasmic_4Nutritionknowledge__VariantMembers = {};
export type Plasmic_4Nutritionknowledge__VariantsArgs = {};
type VariantPropType = keyof Plasmic_4Nutritionknowledge__VariantsArgs;
export const Plasmic_4Nutritionknowledge__VariantProps =
  new Array<VariantPropType>();

export type Plasmic_4Nutritionknowledge__ArgsType = {};
type ArgPropType = keyof Plasmic_4Nutritionknowledge__ArgsType;
export const Plasmic_4Nutritionknowledge__ArgProps = new Array<ArgPropType>();

export type Plasmic_4Nutritionknowledge__OverridesType = {
  root?: Flex__<"div">;
};

export interface Default_4NutritionknowledgeProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function Plasmic_4Nutritionknowledge__RenderFunc(props: {
  variants: Plasmic_4Nutritionknowledge__VariantsArgs;
  args: Plasmic_4Nutritionknowledge__ArgsType;
  overrides: Plasmic_4Nutritionknowledge__OverridesType;
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
        <div className={classNames(projectcss.all, sty.freeBox__vTiY)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__sBcQx
            )}
          >
            {"\u5217\u8868"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__waFSd)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__zkSqX)}
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
                      const actionArgs = { destination: `/LoginPage` };
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
                sty.text__owB9V
              )}
            >
              {"\u9000\u51fa"}
            </div>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__rik3R)}>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__f5Do5)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            loading={"lazy"}
            src={{
              src: "/plasmic/rehab_patient/images/营养知识jpg.jpg",
              fullWidth: 1000,
              fullHeight: 500,
              aspectRatio: undefined
            }}
          />
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__pfYc3)}>
          <div
            className={classNames(projectcss.all, sty.freeBox__v7H1)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo41Carbohydrate"] = true
                ? (() => {
                    const actionArgs = { destination: `/Carbohydrate` };
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
                $steps["goTo41Carbohydrate"] != null &&
                typeof $steps["goTo41Carbohydrate"] === "object" &&
                typeof $steps["goTo41Carbohydrate"].then === "function"
              ) {
                $steps["goTo41Carbohydrate"] = await $steps[
                  "goTo41Carbohydrate"
                ];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__e4Uk)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zS6PI
                )}
              >
                {"\u78b3\u6c34\u5316\u5408\u7269"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__gmXKc)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo42Vitamin"] = true
                ? (() => {
                    const actionArgs = { destination: `/Vitamin` };
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
                $steps["goTo42Vitamin"] != null &&
                typeof $steps["goTo42Vitamin"] === "object" &&
                typeof $steps["goTo42Vitamin"].then === "function"
              ) {
                $steps["goTo42Vitamin"] = await $steps["goTo42Vitamin"];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__e8RnG)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lZRgF
                )}
              >
                {"\u7ef4\u751f\u7d20"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__eg5I)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo43Protein"] = true
                ? (() => {
                    const actionArgs = { destination: `/Protein` };
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
                $steps["goTo43Protein"] != null &&
                typeof $steps["goTo43Protein"] === "object" &&
                typeof $steps["goTo43Protein"].then === "function"
              ) {
                $steps["goTo43Protein"] = await $steps["goTo43Protein"];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__vtqrh)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rtgvd
                )}
              >
                {"\u86cb\u767d\u8d28"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__qC1Ut)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo44Fat"] = true
                ? (() => {
                    const actionArgs = { destination: `/Fat` };
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
                $steps["goTo44Fat"] != null &&
                typeof $steps["goTo44Fat"] === "object" &&
                typeof $steps["goTo44Fat"].then === "function"
              ) {
                $steps["goTo44Fat"] = await $steps["goTo44Fat"];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__mf3ZU)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___9WRns
                )}
              >
                {"\u8102\u80aa"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__ixZ5K)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo45Minerals"] = true
                ? (() => {
                    const actionArgs = { destination: `/Minerals` };
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
                $steps["goTo45Minerals"] != null &&
                typeof $steps["goTo45Minerals"] === "object" &&
                typeof $steps["goTo45Minerals"].then === "function"
              ) {
                $steps["goTo45Minerals"] = await $steps["goTo45Minerals"];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__exfX4)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mFkLc
                )}
              >
                {"\u77ff\u7269\u8d28"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__rmXB)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo46VariousTypesOfFood"] = true
                ? (() => {
                    const actionArgs = { destination: `/Varioustypesoffood` };
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
                $steps["goTo46VariousTypesOfFood"] != null &&
                typeof $steps["goTo46VariousTypesOfFood"] === "object" &&
                typeof $steps["goTo46VariousTypesOfFood"].then === "function"
              ) {
                $steps["goTo46VariousTypesOfFood"] = await $steps[
                  "goTo46VariousTypesOfFood"
                ];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__wH3Ma)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___81DWr
                )}
              >
                {"\u5404\u7c7b\u98df\u7269"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox___28RBr)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo47ChooseFood"] = true
                ? (() => {
                    const actionArgs = { destination: `/Choosefood` };
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
                $steps["goTo47ChooseFood"] != null &&
                typeof $steps["goTo47ChooseFood"] === "object" &&
                typeof $steps["goTo47ChooseFood"].then === "function"
              ) {
                $steps["goTo47ChooseFood"] = await $steps["goTo47ChooseFood"];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__nSnj3)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vfb5G
                )}
              >
                {"\u9009\u62e9\u98df\u7269"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__prZ1T)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo48BalancedDietaryGuidelines"] = true
                ? (() => {
                    const actionArgs = {
                      destination: `/BalancedDietaryGuidelines`
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
                $steps["goTo48BalancedDietaryGuidelines"] != null &&
                typeof $steps["goTo48BalancedDietaryGuidelines"] === "object" &&
                typeof $steps["goTo48BalancedDietaryGuidelines"].then ===
                  "function"
              ) {
                $steps["goTo48BalancedDietaryGuidelines"] = await $steps[
                  "goTo48BalancedDietaryGuidelines"
                ];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__kV0VC)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__f4Sty
                )}
              >
                {"\u81b3\u98df\u6307\u5357"}
              </div>
            </div>
          </div>
        </div>
        <div
          className={classNames(projectcss.all, sty.freeBox__lxL3C)}
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
              sty.text___2ZMwU
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
  Plasmic_4Nutritionknowledge__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic_4Nutritionknowledge__VariantsArgs;
    args?: Plasmic_4Nutritionknowledge__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<Plasmic_4Nutritionknowledge__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      Plasmic_4Nutritionknowledge__ArgsType,
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
          internalArgPropNames: Plasmic_4Nutritionknowledge__ArgProps,
          internalVariantPropNames: Plasmic_4Nutritionknowledge__VariantProps
        }),
      [props, nodeName]
    );
    return Plasmic_4Nutritionknowledge__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "Plasmic_4Nutritionknowledge";
  } else {
    func.displayName = `Plasmic_4Nutritionknowledge.${nodeName}`;
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

export const Plasmic_4Nutritionknowledge = Object.assign(
  // Top-level Plasmic_4Nutritionknowledge renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for Plasmic_4Nutritionknowledge
    internalVariantProps: Plasmic_4Nutritionknowledge__VariantProps,
    internalArgProps: Plasmic_4Nutritionknowledge__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default Plasmic_4Nutritionknowledge;
/* prettier-ignore-end */
