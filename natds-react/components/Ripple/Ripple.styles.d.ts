import { Theme } from '@naturacosmeticos/natds-themes';
import { RippleProps } from './Ripple.props';
declare const styles: (data?: (Required<Pick<RippleProps, "animationDuration" | "color" | "disabled" | "hideOverflow" | "fullWidth" | "showHover">> & {
    size: number;
    mousePosition: {
        x: number;
        y: number;
    };
    isCentered: boolean;
} & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"sharedRippleEffect" | "wrapper" | "ripple" | "rippleContainer" | "rippleActive" | "@keyframes ripple">;
export default styles;
