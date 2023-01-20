import { Theme } from '@naturacosmeticos/natds-themes';
import { CounterProps } from './Counter.props';
declare const styles: (data?: (Required<Pick<CounterProps, "size">> & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"labelText" | "buttonGroup" | "buttonLeft" | "buttonRight" | "inputBase">;
export default styles;
