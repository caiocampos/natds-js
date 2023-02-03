/**
 * @deprecated IFont is deprecated since v0.20 and will be removed at v1.0.
 * Please use typography token from a theme, or interfaces from `natds-themes`
 */
export interface IFont {
    fontSize: string | number;
    fontWeight: number;
    letterSpacing?: number;
    lineHeight?: number;
}
export interface IFontSize {
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
}
