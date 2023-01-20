import { Theme } from '@naturacosmeticos/natds-themes';
import { IconProps } from './Icon.props';
declare const styles: (data?: (Required<Pick<IconProps, "color" | "size">> & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"icon">;
export default styles;
