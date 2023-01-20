import { Theme } from '@naturacosmeticos/natds-themes';
import { TextFieldProps } from './TextField.props';
declare type TextFieldStyleProps = Pick<TextFieldProps, 'label' | 'feedback' | 'disabled'>;
declare const styles: (data?: (TextFieldStyleProps & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"labelText">;
export default styles;
