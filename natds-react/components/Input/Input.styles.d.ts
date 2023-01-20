import { Theme } from '@naturacosmeticos/natds-themes';
import { InputProps } from './Input.props';
declare type InputStyleProps = Pick<InputProps, 'feedback' | 'disabled' | 'readOnly' | 'size' | 'action' | 'isResizable'>;
declare const styles: (data?: (InputStyleProps & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"input" | "base" | "wrapper" | "textArea">;
export default styles;
