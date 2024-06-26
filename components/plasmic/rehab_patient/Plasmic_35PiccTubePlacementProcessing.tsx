// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: caYJwnGE8e7sjdEDGdZ8Mn
// Component: pDYCOvxVpPrq

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
import sty from "./Plasmic_35PiccTubePlacementProcessing.module.css"; // plasmic-import: pDYCOvxVpPrq/css

createPlasmicElementProxy;

export type Plasmic_35PiccTubePlacementProcessing__VariantMembers = {};
export type Plasmic_35PiccTubePlacementProcessing__VariantsArgs = {};
type VariantPropType =
  keyof Plasmic_35PiccTubePlacementProcessing__VariantsArgs;
export const Plasmic_35PiccTubePlacementProcessing__VariantProps =
  new Array<VariantPropType>();

export type Plasmic_35PiccTubePlacementProcessing__ArgsType = {};
type ArgPropType = keyof Plasmic_35PiccTubePlacementProcessing__ArgsType;
export const Plasmic_35PiccTubePlacementProcessing__ArgProps =
  new Array<ArgPropType>();

export type Plasmic_35PiccTubePlacementProcessing__OverridesType = {
  root?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  htmlVideo?: Flex__<typeof Video>;
};

export interface Default_35PiccTubePlacementProcessingProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function Plasmic_35PiccTubePlacementProcessing__RenderFunc(props: {
  variants: Plasmic_35PiccTubePlacementProcessing__VariantsArgs;
  args: Plasmic_35PiccTubePlacementProcessing__ArgsType;
  overrides: Plasmic_35PiccTubePlacementProcessing__OverridesType;
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
        <div className={classNames(projectcss.all, sty.freeBox__rEtN)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__grPd1
            )}
          >
            {"\u6587\u7ae0"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___4Zux7)}>
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
                sty.text___9Djgi
              )}
            >
              {"\u9000\u51fa"}
            </div>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__wwIio)}>
          <Video
            data-plasmic-name={"htmlVideo"}
            data-plasmic-override={overrides.htmlVideo}
            className={classNames("__wab_instance", sty.htmlVideo)}
            controls={true}
            src={
              "https://xiehe-1257043728.cos.ap-nanjing.myqcloud.com/dev/mp4/PICC%E7%BD%AE%E7%AE%A1%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9.mp4"
            }
          />
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__eKnXt)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__fjv6F
            )}
          >
            {"PICC\u7f6e\u7ba1\u6ce8\u610f\u4e8b\u9879\uff1a"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__hB0CB
            )}
          >
            {
              "         PICC(\u5916\u5468\u63d2\u5165\u4e2d\u5fc3\u9759\u8109\u5bfc\u7ba1)\u7f6e\u7ba1\u672f\u540e\u7684\u62a4\u7406\u662f\u786e\u4fdd\u5bfc\u7ba1\u529f\u80fd\u6b63\u5e38\u5e76\u51cf\u5c11\u5e76\u53d1\u75c7\u7684\u5173\u952e\u3002\u672f\u540e\u5e94\u5e38\u89c4\u538b\u8feb\u7a7f\u523a\u70b9\u5e76\u7528\u5f39\u6027\u7ef7\u5e26\u5305\u624e\uff0c\u4ee5\u9632\u6b62\u51fa\u8840\u3002"
            }
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__xwu0V)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo3NursingKnowledge"] = true
                ? (() => {
                    const actionArgs = { destination: `/Nursing Knowledge` };
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
                $steps["goTo3NursingKnowledge"] != null &&
                typeof $steps["goTo3NursingKnowledge"] === "object" &&
                typeof $steps["goTo3NursingKnowledge"].then === "function"
              ) {
                $steps["goTo3NursingKnowledge"] = await $steps[
                  "goTo3NursingKnowledge"
                ];
              }
            }}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___1Qq3U
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
  Plasmic_35PiccTubePlacementProcessing__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic_35PiccTubePlacementProcessing__VariantsArgs;
    args?: Plasmic_35PiccTubePlacementProcessing__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit< // Specify variants directly as props
    Plasmic_35PiccTubePlacementProcessing__VariantsArgs,
    ReservedPropsType
  > &
    /* Specify args directly as props*/ Omit<
      Plasmic_35PiccTubePlacementProcessing__ArgsType,
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
          internalArgPropNames: Plasmic_35PiccTubePlacementProcessing__ArgProps,
          internalVariantPropNames:
            Plasmic_35PiccTubePlacementProcessing__VariantProps
        }),
      [props, nodeName]
    );
    return Plasmic_35PiccTubePlacementProcessing__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "Plasmic_35PiccTubePlacementProcessing";
  } else {
    func.displayName = `Plasmic_35PiccTubePlacementProcessing.${nodeName}`;
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

export const Plasmic_35PiccTubePlacementProcessing = Object.assign(
  // Top-level Plasmic_35PiccTubePlacementProcessing renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    htmlVideo: makeNodeComponent("htmlVideo"),

    // Metadata about props expected for Plasmic_35PiccTubePlacementProcessing
    internalVariantProps: Plasmic_35PiccTubePlacementProcessing__VariantProps,
    internalArgProps: Plasmic_35PiccTubePlacementProcessing__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default Plasmic_35PiccTubePlacementProcessing;
/* prettier-ignore-end */
