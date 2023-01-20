import { Theme } from '@naturacosmeticos/natds-themes';
import { LogoProps } from './Logo.props';
declare const styles: (data?: (Required<Pick<LogoProps, "color" | "size">> & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"root">;
export default styles;
