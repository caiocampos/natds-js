import { Theme } from '@naturacosmeticos/natds-themes';
declare type VariantTypes = 'info' | 'success' | 'error' | 'warning' | 'custom';
declare type BorderTypes = 'contained' | 'outlined';
declare type StyleProps = {
    color: VariantTypes;
    borderType: BorderTypes;
    customBackgroundColor?: string;
    customTextColor?: string;
    customIconColor?: string;
    customBorderColor?: string;
};
declare const styles: (data?: (StyleProps & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"content" | "wrapper">;
export default styles;
