import { ICounterProps } from './Counter';
export declare const INPUT_DIFFERENCE = 2;
export declare const getButtonheight: ({ size }: ICounterProps) => number;
export declare const getInputHeight: (props: ICounterProps) => number;
export declare const useStyles: (props: ICounterProps) => import("@material-ui/styles").ClassNameMap<"input" | "button" | "group">;
export default useStyles;
