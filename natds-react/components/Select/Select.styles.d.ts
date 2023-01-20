import { Theme } from '@naturacosmeticos/natds-themes';
declare type SelectStyleProps = {
    size: 'medium' | 'mediumX';
    isFilled: boolean;
    isDisabled: boolean;
    feedback?: 'error' | 'success';
};
declare const styles: (data?: (SelectStyleProps & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"input" | "icon" | "wrapper" | "labelText" | "inputWrapper">;
export default styles;
