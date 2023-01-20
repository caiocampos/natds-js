import { Theme } from '@naturacosmeticos/natds-themes';
declare type RuleNames = 'snackbarContainer' | 'wrapper' | 'wrapperRow' | 'wrapperColumm' | 'wrapperAction' | 'bodyText' | 'wrapperIcon' | 'show' | 'close';
export interface snackbarStyleProps {
    position: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
    feedback: 'default' | 'success' | 'error' | 'warning' | 'info';
    directionButton?: 'none' | 'inlineButton' | 'blockButton';
    timer: number;
    animation?: boolean;
}
export interface ItimeProps {
    timer: 'minimum' | 'intermediary' | 'indeterminate' | number;
}
interface IgetPositionReturn {
    top: string;
    bottom: string;
    left: string;
    right: string;
}
export declare const getPosition: (pos: string) => IgetPositionReturn | undefined;
export declare const getPositionAnimation: (posAnimation: string, time: number, animation: boolean | undefined) => string | undefined;
export declare const getColor: (theme: Theme) => (feedback: string) => string | undefined;
declare const styles: (data?: (snackbarStyleProps & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<RuleNames>;
export default styles;
