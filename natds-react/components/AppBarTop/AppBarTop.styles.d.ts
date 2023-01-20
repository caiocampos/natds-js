import type { Theme } from '@naturacosmeticos/natds-themes';
declare const styles: (data?: (import("./AppBarTop.props").AppBarProps & {
    hide: boolean;
} & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"container" | "appBar">;
export default styles;
