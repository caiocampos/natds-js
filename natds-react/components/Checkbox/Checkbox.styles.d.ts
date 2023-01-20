import { Theme } from '@naturacosmeticos/natds-themes';
import { CheckboxProps } from './Checkbox.props';
declare const styles: (data?: (Required<Pick<CheckboxProps, "disabled" | "indeterminate">> & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"checkbox" | "container" | "wrapper" | "labelText">;
export default styles;
