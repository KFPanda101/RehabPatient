// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: caYJwnGE8e7sjdEDGdZ8Mn
// Component: WZoyHTM8sq2k

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

import { Video } from "@plasmicpkgs/plasmic-basic-components";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: caYJwnGE8e7sjdEDGdZ8Mn/projectcss
import sty from "./Plasmic_34Treatmentofesophagealforeignbodies.module.css"; // plasmic-import: WZoyHTM8sq2k/css

createPlasmicElementProxy;

export type Plasmic_34Treatmentofesophagealforeignbodies__VariantMembers = {};
export type Plasmic_34Treatmentofesophagealforeignbodies__VariantsArgs = {};
type VariantPropType =
  keyof Plasmic_34Treatmentofesophagealforeignbodies__VariantsArgs;
export const Plasmic_34Treatmentofesophagealforeignbodies__VariantProps =
  new Array<VariantPropType>();

export type Plasmic_34Treatmentofesophagealforeignbodies__ArgsType = {};
type ArgPropType = keyof Plasmic_34Treatmentofesophagealforeignbodies__ArgsType;
export const Plasmic_34Treatmentofesophagealforeignbodies__ArgProps =
  new Array<ArgPropType>();

export type Plasmic_34Treatmentofesophagealforeignbodies__OverridesType = {
  root?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  htmlVideo?: Flex__<typeof Video>;
};

export interface Default_34TreatmentofesophagealforeignbodiesProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function Plasmic_34Treatmentofesophagealforeignbodies__RenderFunc(props: {
  variants: Plasmic_34Treatmentofesophagealforeignbodies__VariantsArgs;
  args: Plasmic_34Treatmentofesophagealforeignbodies__ArgsType;
  overrides: Plasmic_34Treatmentofesophagealforeignbodies__OverridesType;
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
        <div className={classNames(projectcss.all, sty.freeBox__eKe9)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__nxWo8
            )}
          >
            {"\u6587\u7ae0"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__xgY1G)}>
            <PlasmicImg__
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"25%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              onClick={async event => {
                const $steps = {};

                $steps["goToPage"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: (() => {
                          try {
                            return $ctx.config.routePrefix + "/LoginPage";
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
                  $steps["goToPage"] != null &&
                  typeof $steps["goToPage"] === "object" &&
                  typeof $steps["goToPage"].then === "function"
                ) {
                  $steps["goToPage"] = await $steps["goToPage"];
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
                sty.text__qeB9F
              )}
            >
              {"\u9000\u51fa"}
            </div>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__mjqaJ)}>
          <Video
            data-plasmic-name={"htmlVideo"}
            data-plasmic-override={overrides.htmlVideo}
            className={classNames("__wab_instance", sty.htmlVideo)}
            controls={true}
            src={
              "https://xiehe-1257043728.cos.ap-nanjing.myqcloud.com/dev/mp4/%E9%A3%9F%E7%AE%A1%E5%BC%82%E7%89%A9%E5%A6%82%E4%BD%95%E5%A4%84%E7%90%86.mp4"
            }
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__gnHb5
            )}
          >
            {
              "\u5982\u4f55\u9884\u9632\u98df\u7ba1\u5f02\u7269\u5904\u7406\uff1a"
            }
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__wazu
            )}
          >
            {
              "         \u6c14\u9053\u5f02\u7269\u6897\u963b\u662f\u7d27\u6025\u533b\u7597\u72b6\u51b5:\u9700\u7acb\u5373\u91c7\u53d6\u63aa\u65bd\u4ee5\u9632\u6b62\u4e25\u91cd\u540e\u679c\u3002\u6839\u636e\u6897\u963b\u7684\u4e25\u91cd\u7a0b\u5ea6\uff0c\u5904\u7406\u65b9\u6cd5\u6709\u6240\u4e0d\u540c\u3002"
            }
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__hprAz)}
            onClick={async event => {
              const $steps = {};

              $steps["goToPage"] = true
                ? (() => {
                    const actionArgs = {
                      destination: (() => {
                        try {
                          return $ctx.config.routePrefix + "/NursingKnowledge";
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
                $steps["goToPage"] != null &&
                typeof $steps["goToPage"] === "object" &&
                typeof $steps["goToPage"].then === "function"
              ) {
                $steps["goToPage"] = await $steps["goToPage"];
              }
            }}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__bBYbo
              )}
            >
              {"\u8fd4\u56de"}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "htmlVideo"],
  img: ["img"],
  htmlVideo: ["htmlVideo"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof PlasmicImg__;
  htmlVideo: typeof Video;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  Plasmic_34Treatmentofesophagealforeignbodies__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic_34Treatmentofesophagealforeignbodies__VariantsArgs;
    args?: Plasmic_34Treatmentofesophagealforeignbodies__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit< // Specify variants directly as props
    Plasmic_34Treatmentofesophagealforeignbodies__VariantsArgs,
    ReservedPropsType
  > &
    /* Specify args directly as props*/ Omit<
      Plasmic_34Treatmentofesophagealforeignbodies__ArgsType,
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
          internalArgPropNames:
            Plasmic_34Treatmentofesophagealforeignbodies__ArgProps,
          internalVariantPropNames:
            Plasmic_34Treatmentofesophagealforeignbodies__VariantProps
        }),
      [props, nodeName]
    );
    return Plasmic_34Treatmentofesophagealforeignbodies__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "Plasmic_34Treatmentofesophagealforeignbodies";
  } else {
    func.displayName = `Plasmic_34Treatmentofesophagealforeignbodies.${nodeName}`;
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

export const Plasmic_34Treatmentofesophagealforeignbodies = Object.assign(
  // Top-level Plasmic_34Treatmentofesophagealforeignbodies renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    htmlVideo: makeNodeComponent("htmlVideo"),

    // Metadata about props expected for Plasmic_34Treatmentofesophagealforeignbodies
    internalVariantProps:
      Plasmic_34Treatmentofesophagealforeignbodies__VariantProps,
    internalArgProps: Plasmic_34Treatmentofesophagealforeignbodies__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default Plasmic_34Treatmentofesophagealforeignbodies;
/* prettier-ignore-end */
