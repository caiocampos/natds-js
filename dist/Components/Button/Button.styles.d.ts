import { IThemeWeb } from '../../Themes';
declare type ButtonRootStyles = {
    paddingLeft?: number;
    paddingRight?: number;
};
declare type ButtonLabelStyles = {
    lineHeight?: string;
    height?: number;
    marginBottom?: number;
    marginTop?: number;
};
declare type ButtonStyles = {
    root: ButtonRootStyles;
    label: ButtonLabelStyles;
};
export declare const getRootStyles: (theme: IThemeWeb) => (ButtonRootStyles);
export declare const getLabelStyles: (theme: IThemeWeb) => (ButtonLabelStyles);
export declare const styles: (theme: IThemeWeb) => ButtonStyles;
export declare const useStyles: (props?: any) => import("@material-ui/styles").ClassNameMap<never>;
export default useStyles;
