import { IIconSizes } from '@naturacosmeticos/natds-styles';
import { IThemeWeb } from '../../Themes';
declare type IconFontSizeArgs = {
    size?: keyof IIconSizes;
    theme: IThemeWeb;
};
export declare const getFontSize: ({ size, theme }: IconFontSizeArgs) => string;
export {};
