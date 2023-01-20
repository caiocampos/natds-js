import { Theme } from '@naturacosmeticos/natds-themes';
import { RadioButtonProps } from './RadioButton.props';
declare const styles: (data?: (Required<Pick<RadioButtonProps, "disabled">> & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"container" | "wrapper" | "labelText" | "radioButton">;
export default styles;
