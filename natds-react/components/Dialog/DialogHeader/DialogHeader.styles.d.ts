import { Theme } from '@naturacosmeticos/natds-themes';
declare const styles: (data?: (((value: string, index: number, array: string[]) => unknown) & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"header" | "title">;
export default styles;
