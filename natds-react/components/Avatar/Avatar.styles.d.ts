import { Theme } from '@naturacosmeticos/natds-themes';
import { AvatarProps } from './Avatar.props';
declare const styles: (data?: (Required<Pick<AvatarProps, "size">> & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"label" | "image" | "icon" | "surface">;
export default styles;
