import { Color, Size } from '@naturacosmeticos/natds-themes';
declare type LogoColors = 'neutral' | keyof Pick<Color, 'primary' | 'secondary' | 'highlight' | 'surface'>;
declare type LogoSizes = keyof Omit<Size, 'none' | 'micro' | 'tiny' | 'small' | 'standard' | 'semi' | 'semiX'>;
declare type LogoModels = 'a' | 'b';
export interface LogoProps {
    /**
     * The Logo description
     */
    arialabel?: string;
    /**
     * Override or extend the styles applied to the component
     */
    className?: string;
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
