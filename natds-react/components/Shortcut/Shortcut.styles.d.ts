import { Theme } from '@naturacosmeticos/natds-themes';
import { ShortcutProps } from './Shortcut.props';
declare type ShortcutStyleProps = Pick<ShortcutProps, 'variant' | 'disabled' | 'color' | 'breakLine'>;
declare const styles: (data?: (ShortcutStyleProps & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"content" | "container" | "wrapper" | "labelText" | "badgeContainer">;
export default styles;
