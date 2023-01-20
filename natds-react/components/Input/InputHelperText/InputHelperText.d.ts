import { InputHelperTextProps } from './InputHelperText.props';
import { Feedback } from '../Input.props';
export declare const getIconName: (feedback: Feedback) => "outlined-action-cancel" | "outlined-action-check";
export declare const getIconColor: (feedback: Feedback) => "success" | "alert";
declare const InputHelperText: ({ disabled, feedback, helperText }: InputHelperTextProps) => JSX.Element;
export default InputHelperText;
