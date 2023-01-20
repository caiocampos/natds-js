import { Theme } from '@naturacosmeticos/natds-themes';
declare type AutoCompleteStyleProps = {
    size: 'medium' | 'mediumX';
    isFilled: boolean;
    isDisabled: boolean;
    feedback?: 'error' | 'success';
    position?: 'bottom' | 'top';
    readonly?: boolean;
};
declare const styles: (data?: (AutoCompleteStyleProps & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"input" | "icon" | "wrapper" | "labelText" | "inputWrapper" | "surfaceWrapper" | "menuOptionsWrapper" | "optionsItem">;
export default styles;
