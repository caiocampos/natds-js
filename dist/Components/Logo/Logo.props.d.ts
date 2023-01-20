import { ISizes } from '@naturacosmeticos/natds-styles';
import { Color } from '@naturacosmeticos/natds-themes';
declare type LogoColors = 'neutral' | keyof Pick<Color, 'primary' | 'secondary' | 'highlight' | 'surface'>;
declare type LogoSizes = keyof Omit<ISizes, 'none' | 'micro' | 'tiny' | 'small' | 'standard' | 'semi' | 'semiX'>;
declare type LogoModels = 'a' | 'b';
export interface ILogoProps {
    /**
     * The Logo description
     */
    arialabel?: string;
    /**
    * The Logo color
    * @default neutral
    */
    color?: LogoColors;
    /**
     * The Logo model.
     * @default a
     */
    model?: LogoModels;
    /**
     * The Logo size
     * @default veryhuge
     */
    size?: LogoSizes;
}
export {};
