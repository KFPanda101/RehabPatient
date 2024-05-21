// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: caYJwnGE8e7sjdEDGdZ8Mn
// Component: YULG3jSYOMFQ

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

import { Video } from "@plasmicpkgs/plasmic-basic-components";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: caYJwnGE8e7sjdEDGdZ8Mn/projectcss
import sty from "./Plasmic_32PreventingThrombosis.module.css"; // plasmic-import: YULG3jSYOMFQ/css

createPlasmicElementProxy;

export type Plasmic_32PreventingThrombosis__VariantMembers = {};
export type Plasmic_32PreventingThrombosis__VariantsArgs = {};
type VariantPropType = keyof Plasmic_32PreventingThrombosis__VariantsArgs;
export const Plasmic_32PreventingThrombosis__VariantProps =
  new Array<VariantPropType>();

export type Plasmic_32PreventingThrombosis__ArgsType = {};
type ArgPropType = keyof Plasmic_32PreventingThrombosis__ArgsType;
export const Plasmic_32PreventingThrombosis__ArgProps =
  new Array<ArgPropType>();

export type Plasmic_32PreventingThrombosis__OverridesType = {
  root?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  htmlVideo?: Flex__<typeof Video>;
};

export interface Default_32PreventingThrombosisProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function Plasmic_32PreventingThrombosis__RenderFunc(props: {
  variants: Plasmic_32PreventingThrombosis__VariantsArgs;
  args: Plasmic_32PreventingThrombosis__ArgsType;
  overrides: Plasmic_32PreventingThrombosis__OverridesType;
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
        <div className={classNames(projectcss.all, sty.freeBox___8QjkW)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__cEOw
            )}
          >
            {"\u6587\u7ae0"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___7AlEl)}>
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
                sty.text__a9Icq
              )}
            >
              {"\u9000\u51fa"}
            </div>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox___4Q1RD)}>
          <Video
            data-plasmic-name={"htmlVideo"}
            data-plasmic-override={overrides.htmlVideo}
            className={classNames("__wab_instance", sty.htmlVideo)}
            controls={true}
            src={
              "https://xiehe-1257043728.cos.ap-nanjing.myqcloud.com/dev/mp4/%E5%A6%82%E4%BD%95%E9%A2%84%E9%98%B2%E8%A1%80%E6%A0%93.mp4"
            }
          />
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__cmo6Y)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__bhZme
            )}
          >
            {"\u5982\u4f55\u9884\u9632\u6df1\u9759\u8109\u8840\u6813\uff1a"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__ebled
            )}
          >
            {
              "         \u6df1\u9759\u8109\u8840\u6813(DVT)\u662f\u4e00\u79cd\u4e25\u91cd\u7684\u5065\u5eb7\u95ee\u9898\uff0c\u5b83\u53d1\u751f\u5728\u8840\u6db2\u5728\u4f53\u5185\u6df1\u90e8\u9759\u8109(\u901a\u5e38\u662f\u817f\u90e8)\u5185\u5f02\u5e38\u51dd\u7ed3\uff0c\u4ece\u800c\u963b\u585e\u8840\u6db2\u6d41\u52a8\uff0c\u5bfc\u81f4\u9759\u8109\u56de\u6d41\u969c\u788d\u3002\u7531\u4e8eDVT\u53ef\u80fd\u5bfc\u81f4\u75bc\u75db\u3001\u80bf\u80c0\uff0c\u751a\u81f3\u66f4\u4e25\u91cd\u7684\u5e76\u53d1\u75c7\u5982\u80ba\u6813\u585e\uff0c\u5b83\u7684\u9884\u9632\u5c24\u4e3a\u91cd\u8981\u3002"
            }
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__y7UlH)}
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
                sty.text__tb3ST
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
  Plasmic_32PreventingThrombosis__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic_32PreventingThrombosis__VariantsArgs;
    args?: Plasmic_32PreventingThrombosis__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<Plasmic_32PreventingThrombosis__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      Plasmic_32PreventingThrombosis__ArgsType,
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
          internalArgPropNames: Plasmic_32PreventingThrombosis__ArgProps,
          internalVariantPropNames: Plasmic_32PreventingThrombosis__VariantProps
        }),
      [props, nodeName]
    );
    return Plasmic_32PreventingThrombosis__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "Plasmic_32PreventingThrombosis";
  } else {
    func.displayName = `Plasmic_32PreventingThrombosis.${nodeName}`;
  }
  return func;
}

export const Plasmic_32PreventingThrombosis = Object.assign(
  // Top-level Plasmic_32PreventingThrombosis renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    htmlVideo: makeNodeComponent("htmlVideo"),

    // Metadata about props expected for Plasmic_32PreventingThrombosis
    internalVariantProps: Plasmic_32PreventingThrombosis__VariantProps,
    internalArgProps: Plasmic_32PreventingThrombosis__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default Plasmic_32PreventingThrombosis;
/* prettier-ignore-end */
