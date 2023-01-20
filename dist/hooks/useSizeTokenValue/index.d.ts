import { ISizes } from '@naturacosmeticos/natds-styles';
import { IThemeWeb } from '../../Themes';
declare type SizeTokenName = keyof ISizes;
declare type GetSizeTokenValueArgs = {
    name?: SizeTokenName;
    theme: IThemeWeb;
};
declare type GetSizeTokenValueFn = ({ name, theme }: GetSizeTokenValueArgs) => number | null;
export declare const getSizeTokenValue: GetSizeTokenValueFn;
export declare const useSizeTokenValue: (sizeTokenName?: SizeTokenName) => number | null;
export {};
