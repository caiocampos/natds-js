import { IThemeWeb } from '../../Themes';
declare type FabStyles = {
    backgroundColor?: string;
    boxShadow?: string;
    color?: string;
};
export declare const styles: (theme: IThemeWeb) => {
    root: FabStyles;
    primary: FabStyles;
    secondary: FabStyles;
};
export declare const useStyles: (props?: any) => import("@material-ui/styles").ClassNameMap<never>;
export {};
