import { Theme } from '@naturacosmeticos/natds-themes';
import { ButtonProps } from './Button.props';
declare type ButtonStyleProps = Pick<ButtonProps, 'size' | 'showIcon' | 'iconPosition' | 'variant' | 'fullWidth' | 'disabled'>;
declare const styles: (data?: (ButtonStyleProps & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"button" | "label" | "labelContainer">;
export default styles;
