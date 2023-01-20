import { Theme } from '@naturacosmeticos/natds-themes';
import { InputProps } from '../Input.props';
declare const styles: (data?: (InputProps & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"image" | "container" | "wrapper">;
export default styles;
