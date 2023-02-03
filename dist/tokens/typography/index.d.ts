import { Theme } from '@naturacosmeticos/natds-themes';
import { IFont, IFontSize } from './IFont';
export declare const getFontSize: (theme: Theme) => IFontSize;
/**
 * @deprecated since 0.19. It will be removed at 1.0.
 * Please use typography tokens directly from the theme.
 */
export declare const fontSize: {
    h1: IFont;
    h2: IFont;
    h3: IFont;
    h4: IFont;
    h5: IFont;
    h6: IFont;
    subtitle1: IFont;
    subtitle2: IFont;
    body1: IFont;
    body2: IFont;
    button: IFont;
    caption: IFont;
    overline: IFont;
};
