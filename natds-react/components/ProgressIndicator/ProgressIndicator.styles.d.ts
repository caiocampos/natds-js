import { Theme } from '@naturacosmeticos/natds-themes';
import { ProgressIndicatorProps } from './ProgressIndicator.props';
declare const styles: (data?: (Required<Pick<ProgressIndicatorProps, "size" | "showBackdrop">> & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"backdrop" | "loader" | "@keyframes spin" | "@keyframes rotate">;
export default styles;
