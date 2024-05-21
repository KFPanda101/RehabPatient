// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: caYJwnGE8e7sjdEDGdZ8Mn
// Component: 6PHcrW1VaECJ

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

import { RichTable } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { tableHelpers as RichTable_Helpers } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { SideEffect } from "@plasmicpkgs/plasmic-basic-components";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: caYJwnGE8e7sjdEDGdZ8Mn/projectcss
import sty from "./Plasmic_1TodaysSchedule.module.css"; // plasmic-import: 6PHcrW1VaECJ/css

createPlasmicElementProxy;

export type Plasmic_1TodaysSchedule__VariantMembers = {};
export type Plasmic_1TodaysSchedule__VariantsArgs = {};
type VariantPropType = keyof Plasmic_1TodaysSchedule__VariantsArgs;
export const Plasmic_1TodaysSchedule__VariantProps =
  new Array<VariantPropType>();

export type Plasmic_1TodaysSchedule__ArgsType = {};
type ArgPropType = keyof Plasmic_1TodaysSchedule__ArgsType;
export const Plasmic_1TodaysSchedule__ArgProps = new Array<ArgPropType>();

export type Plasmic_1TodaysSchedule__OverridesType = {
  root?: Flex__<"div">;
  table?: Flex__<typeof RichTable>;
  sideEffect?: Flex__<typeof SideEffect>;
};

export interface Default_1TodaysScheduleProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function Plasmic_1TodaysSchedule__RenderFunc(props: {
  variants: Plasmic_1TodaysSchedule__VariantsArgs;
  args: Plasmic_1TodaysSchedule__ArgsType;
  overrides: Plasmic_1TodaysSchedule__OverridesType;
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

  const $globalActions = useGlobalActions?.();

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "variable",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return new Date().getSeconds() % 10;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return 0;
              }
              throw e;
            }
          })()
      },
      {
        path: "patientPersonalSchedule",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => []
      },
      {
        path: "table.selectedRowKey",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRowKey", RichTable_Helpers)
      },
      {
        path: "table.selectedRow",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRow", RichTable_Helpers)
      },
      {
        path: "table.selectedRows",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRows", RichTable_Helpers)
      },
      {
        path: "table.selectedRowKeys",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRowKeys", RichTable_Helpers)
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
        <div className={classNames(projectcss.all, sty.freeBox___1PvWg)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___1YUhv
            )}
          >
            {"\u4eca\u65e5\u65e5\u7a0b"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__bj7BK)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img___1RmAp)}
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
                sty.text___0UEvy
              )}
            >
              {"\u9000\u51fa"}
            </div>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox___1RHh1)}>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__eifI)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            loading={"lazy"}
            src={{
              src: "/plasmic/rehab_patient/images/日程1000X500Png.png",
              fullWidth: 1001,
              fullHeight: 501,
              aspectRatio: undefined
            }}
          />
        </div>
        {(() => {
          const child$Props = {
            className: classNames("__wab_instance", sty.table),
            data: (() => {
              try {
                return $state.patientPersonalSchedule.value.data.results;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return undefined;
                }
                throw e;
              }
            })(),
            fields: (() => {
              const __composite = [
                {
                  key: "date",
                  fieldId: "date",
                  title: null,
                  dataType: null,
                  timeStyle: null,
                  hour12: null
                },
                {
                  key: "patientId",
                  fieldId: "patientId",
                  title: null,
                  isHidden: null
                },
                {
                  key: "timePeriod",
                  fieldId: "timePeriod",
                  title: null,
                  isHidden: null
                },
                {
                  key: "therapistId",
                  fieldId: "therapistId",
                  title: null,
                  expr: null
                },
                {
                  key: "startTime",
                  fieldId: "startTime",
                  title: null,
                  dataType: null
                },
                {
                  key: "endTime",
                  fieldId: "endTime",
                  title: null,
                  dataType: null
                },
                {
                  key: "therapistInfo",
                  fieldId: "therapistInfo",
                  title: null,
                  expr: null
                },
                { key: "delete", fieldId: "delete", isHidden: null },
                { key: "update_time", fieldId: "update_time", isHidden: null },
                { key: "add_time", fieldId: "add_time", isHidden: null },
                { key: "id", fieldId: "id", isHidden: null },
                { key: "hospitalId", fieldId: "hospitalId", isHidden: null }
              ];
              __composite["0"]["title"] = "\u65e5\u671f";
              __composite["0"]["dataType"] = "datetime";
              __composite["0"]["timeStyle"] = "none";
              __composite["0"]["hour12"] = false;
              __composite["1"]["title"] = "\u60a3\u8005\u59d3\u540d";
              __composite["1"]["isHidden"] = true;
              __composite["2"]["title"] = "\u65f6\u95f4\u6bb5";
              __composite["2"]["isHidden"] = true;
              __composite["3"]["title"] = "\u6cbb\u7597\u5e08";
              __composite["3"]["expr"] = (currentItem, currentValue) => {
                return currentItem.therapistInfo.name;
              };
              __composite["4"]["title"] = "\u5f00\u59cb\u65f6\u95f4";
              __composite["4"]["dataType"] = "number";
              __composite["5"]["title"] = "\u7ed3\u675f\u65f6\u95f4";
              __composite["5"]["dataType"] = "number";
              __composite["6"]["title"] = "\u9884\u7ea6\u5730\u5740";
              __composite["6"]["expr"] = (currentItem, currentValue) => {
                return (() => {
                  switch (currentValue.healGroupId) {
                    case 6:
                      return "5号楼-5层-501-运动疗法室";
                    case 7:
                      return "5号楼-5层-502-物理因子治疗室";
                    case 8:
                      return "5号楼-5层-503-作业治疗室";
                    case 9:
                      return "5号楼-5层-504-言语治疗室";
                    case 10:
                      return "5号楼-5层-505-认知治疗室";
                    case 11:
                      return "5号楼-5层-506-心肺治疗室";
                    default:
                      return null;
                  }
                })();
              };
              __composite["7"]["isHidden"] = true;
              __composite["8"]["isHidden"] = true;
              __composite["9"]["isHidden"] = true;
              __composite["10"]["isHidden"] = true;
              __composite["11"]["isHidden"] = true;
              return __composite;
            })(),

            onRowClick: async (rowKey, row, event) => {
              const $steps = {};
            },
            onRowSelectionChanged: async (...eventArgs: any) => {
              generateStateOnChangePropForCodeComponents(
                $state,
                "selectedRowKey",
                ["table", "selectedRowKey"],
                RichTable_Helpers
              ).apply(null, eventArgs);
              generateStateOnChangePropForCodeComponents(
                $state,
                "selectedRow",
                ["table", "selectedRow"],
                RichTable_Helpers
              ).apply(null, eventArgs);
              generateStateOnChangePropForCodeComponents(
                $state,
                "selectedRows",
                ["table", "selectedRows"],
                RichTable_Helpers
              ).apply(null, eventArgs);
              generateStateOnChangePropForCodeComponents(
                $state,
                "selectedRowKeys",
                ["table", "selectedRowKeys"],
                RichTable_Helpers
              ).apply(null, eventArgs);
            },
            pagination: true,
            scopeClassName: sty["table__instance"],
            selectedRowKey: generateStateValueProp($state, [
              "table",
              "selectedRowKey"
            ]),
            selectedRowKeys: generateStateValueProp($state, [
              "table",
              "selectedRowKeys"
            ]),
            themeResetClassName: classNames(
              projectcss.root_reset,
              projectcss.root_reset_tags,
              projectcss.plasmic_default_styles,
              projectcss.plasmic_mixins,
              projectcss.plasmic_tokens,
              plasmic_antd_5_hostless_css.plasmic_tokens,
              plasmic_plasmic_rich_components_css.plasmic_tokens
            )
          };
          initializeCodeComponentStates(
            $state,
            [
              {
                name: "selectedRowKey",
                plasmicStateName: "table.selectedRowKey"
              },
              {
                name: "selectedRow",
                plasmicStateName: "table.selectedRow"
              },
              {
                name: "selectedRows",
                plasmicStateName: "table.selectedRows"
              },
              {
                name: "selectedRowKeys",
                plasmicStateName: "table.selectedRowKeys"
              }
            ],
            [],
            RichTable_Helpers ?? {},
            child$Props
          );

          return (
            <RichTable
              data-plasmic-name={"table"}
              data-plasmic-override={overrides.table}
              {...child$Props}
            />
          );
        })()}
        <SideEffect
          data-plasmic-name={"sideEffect"}
          data-plasmic-override={overrides.sideEffect}
          className={classNames("__wab_instance", sty.sideEffect)}
          deps={(() => {
            try {
              return [$state.variable, $ctx.query.id];
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
          onMount={async () => {
            const $steps = {};

            $steps["patientList"] = $ctx.query.id
              ? (() => {
                  const actionArgs = {
                    args: [
                      "/hospitalserver/schedules/personExport",
                      (() => {
                        try {
                          return {
                            patientId: $ctx.query.id
                          };
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })(),
                      (() => {
                        try {
                          return $state.patientPersonalSchedule;
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
                    ]
                  };
                  return $globalActions["GlobalContext.callGet"]?.apply(null, [
                    ...actionArgs.args
                  ]);
                })()
              : undefined;
            if (
              $steps["patientList"] != null &&
              typeof $steps["patientList"] === "object" &&
              typeof $steps["patientList"].then === "function"
            ) {
              $steps["patientList"] = await $steps["patientList"];
            }
          }}
        />

        <div className={classNames(projectcss.all, sty.freeBox__zSf3)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__rOQi
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
  root: ["root", "table", "sideEffect"],
  table: ["table"],
  sideEffect: ["sideEffect"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  table: typeof RichTable;
  sideEffect: typeof SideEffect;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  Plasmic_1TodaysSchedule__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic_1TodaysSchedule__VariantsArgs;
    args?: Plasmic_1TodaysSchedule__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<Plasmic_1TodaysSchedule__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      Plasmic_1TodaysSchedule__ArgsType,
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
          internalArgPropNames: Plasmic_1TodaysSchedule__ArgProps,
          internalVariantPropNames: Plasmic_1TodaysSchedule__VariantProps
        }),
      [props, nodeName]
    );
    return Plasmic_1TodaysSchedule__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "Plasmic_1TodaysSchedule";
  } else {
    func.displayName = `Plasmic_1TodaysSchedule.${nodeName}`;
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

export const Plasmic_1TodaysSchedule = Object.assign(
  // Top-level Plasmic_1TodaysSchedule renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    table: makeNodeComponent("table"),
    sideEffect: makeNodeComponent("sideEffect"),

    // Metadata about props expected for Plasmic_1TodaysSchedule
    internalVariantProps: Plasmic_1TodaysSchedule__VariantProps,
    internalArgProps: Plasmic_1TodaysSchedule__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default Plasmic_1TodaysSchedule;
/* prettier-ignore-end */
