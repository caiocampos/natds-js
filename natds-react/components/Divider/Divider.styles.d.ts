import { Theme } from '@naturacosmeticos/natds-themes';
import { DividerProps } from './Divider.props';
declare const styles: (data?: (Required<Pick<DividerProps, "variant">> & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"divider">;
export default styles;
