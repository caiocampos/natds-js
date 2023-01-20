import { ISizes } from '@naturacosmeticos/natds-styles';
import { IThemeWeb } from '../../Themes';
export declare type SizePropValue = keyof ISizes | 'auto' | number;
declare type GetSizeStylePropArgs = {
    theme: IThemeWeb;
    value?: SizePropValue;
};
declare type GetSizeStylePropFunc = ({ theme, value }: GetSizeStylePropArgs) => string | number;
export declare const getSizeStyleProp: GetSizeStylePropFunc;
export declare const useSizeStyleProp: (value: SizePropValue) => string | number;
export default useSizeStyleProp;
