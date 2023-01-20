import { IThemeWeb } from '../../Themes';
declare type ColorDefault = {
    backgroundColor?: string;
    color?: string;
};
export declare const styles: (theme: IThemeWeb) => ({
    colorDefault: ColorDefault;
});
export declare const useStyles: (props?: any) => import("@material-ui/styles").ClassNameMap<never>;
export default useStyles;
