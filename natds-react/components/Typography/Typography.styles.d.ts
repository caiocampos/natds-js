import { Theme } from '@naturacosmeticos/natds-themes';
declare type TypographyVariant = {
    variant: 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'overline';
};
declare const styles: (data?: (TypographyVariant & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"text">;
export default styles;
