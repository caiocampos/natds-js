import { Theme } from '@naturacosmeticos/natds-themes';
import { CardProps } from './Card.props';
declare const styles: (data?: (Required<Pick<CardProps, "elevation" | "radius">> & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"card">;
export default styles;
