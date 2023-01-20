import { Theme } from '@naturacosmeticos/natds-themes';
import { SwitchProps } from './Switch.props';
declare const styles: (data?: (Required<Pick<SwitchProps, "disabled" | "checked">> & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"switchContainer" | "switchBase" | "switchInput" | "switchTrack" | "switchOverlay" | "switchThumb">;
export default styles;
