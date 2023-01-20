import { Theme } from '@naturacosmeticos/natds-themes';
declare const styles: (data?: {
    theme?: Theme | undefined;
} | undefined) => import("jss").Classes<"wrapper">;
export default styles;
