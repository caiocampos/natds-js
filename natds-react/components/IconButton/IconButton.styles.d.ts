import { Theme } from '@naturacosmeticos/natds-themes';
import { IconButtonProps } from './IconButton.props';
declare const styles: (data?: (Required<Pick<IconButtonProps, "disabled" | "size" | "backgroundStyle">> & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"iconButtonContainer">;
export default styles;
