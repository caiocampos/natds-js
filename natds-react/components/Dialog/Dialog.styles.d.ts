import { Theme } from '@naturacosmeticos/natds-themes';
import { DialogProps, DialogSizes } from './Dialog.props';
declare type DialogStyleProps = Required<Pick<DialogProps, 'open' | 'size'>> & {
    width: number;
};
export declare const convertSize: (size: DialogSizes) => number;
export declare const getSize: () => ({ size, width }: DialogStyleProps) => number | "90vw";
declare const styles: (data?: (Required<Pick<DialogProps, "open" | "size">> & {
    width: number;
} & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"overlay" | "dialog">;
export default styles;
