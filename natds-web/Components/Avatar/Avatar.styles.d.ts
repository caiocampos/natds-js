import { IAvatarProperties } from '@naturacosmeticos/natds-styles';
import { StyleRules } from '@material-ui/core';
import { AvatarColor, AvatarSize } from './Avatar.props';
import { IThemeWeb } from '../../Themes';
declare type AvatarStylesArgs = {
    color?: AvatarColor;
    size?: AvatarSize;
    theme: IThemeWeb;
};
declare type AvatarFallbackStyles = {
    color: string;
    fill: string;
};
declare type AvatarRootStyles = {
    backgroundColor: string;
    color: string;
    fontSize: IAvatarProperties['fontSize'];
    height: IAvatarProperties['size'];
    width: IAvatarProperties['size'];
};
declare type AvatarStyles = {
    fallback: AvatarFallbackStyles;
    root: AvatarRootStyles;
};
export declare const getStylesForColor: ({ color, theme }: AvatarStylesArgs) => AvatarStyles;
export declare const styles: ({ color, size, theme }: AvatarStylesArgs) => StyleRules<'root' | 'fallback'>;
export default styles;
