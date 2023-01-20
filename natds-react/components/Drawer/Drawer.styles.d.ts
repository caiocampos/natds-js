import type { Theme } from '@naturacosmeticos/natds-themes';
import type { DrawerProps } from './Drawer.props';
declare const styles: (data?: (DrawerProps & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"overlayContainer" | "drawer">;
export default styles;
