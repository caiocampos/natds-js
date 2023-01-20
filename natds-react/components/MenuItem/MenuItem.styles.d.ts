import { Theme } from '@naturacosmeticos/natds-themes';
import { MenuItemProps } from './MenuItem.props';
declare const styles: (data?: (MenuItemProps & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"listItem" | "menuItem">;
export default styles;
