import { Theme } from '@naturacosmeticos/natds-themes';
import { BadgeProps } from './Badge.props';
export declare type BadgeVariant = 'standard' | 'pulse' | 'dot';
declare const styles: (data?: (Required<Pick<BadgeProps, "color" | "variant">> & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"label" | "badge" | "@keyframes badge">;
export default styles;
