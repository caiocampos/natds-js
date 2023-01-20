import { Theme } from '@naturacosmeticos/natds-themes';
import { InputHelperTextProps } from './InputHelperText.props';
declare type InputHelperTextStyleProps = Pick<InputHelperTextProps, 'feedback' | 'disabled'>;
export declare const getFeedbackTextColor: (theme: Theme) => ({ feedback, disabled }: InputHelperTextStyleProps) => string;
declare const styles: (data?: (InputHelperTextStyleProps & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"helperText">;
export default styles;
