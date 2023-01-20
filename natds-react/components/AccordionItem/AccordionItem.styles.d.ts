import { Theme } from '@naturacosmeticos/natds-themes';
declare type StyleProps = {
    color: 'regular' | 'primary';
    isActive: boolean;
    isDisabled: boolean;
};
declare const styles: (data?: (StyleProps & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"content" | "header" | "legend" | "wrapper">;
export default styles;
