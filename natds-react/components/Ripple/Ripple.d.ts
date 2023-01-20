import { RippleProps } from './Ripple.props';
declare type Size = {
    width: number;
    height: number;
};
export declare const getBiggestSide: ({ width, height }: Size) => number;
declare const Ripple: ({ animationDuration, children, color, disabled, focus, fullWidth, hideOverflow, isCentered, showHover }: RippleProps) => JSX.Element;
export default Ripple;
