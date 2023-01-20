declare type UseStylesArgs = {
    scrolled: boolean;
};
export declare const boxShadow: ({ scrolled }: UseStylesArgs) => "none" | "rgba(0, 0, 0, .14) inset 0 9px 5px -5px";
export declare const useStyles: (props: UseStylesArgs) => import("@material-ui/styles").ClassNameMap<"scroll" | "root">;
export default useStyles;
