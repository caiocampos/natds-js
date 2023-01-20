import { themes as styleThemes } from '@naturacosmeticos/natds-styles';
import { IThemeWeb, IThemeWebBase } from './IThemeWeb';
export declare type IThemesWeb<K extends keyof typeof styleThemes> = IThemesModes<K, IThemeWeb>;
export declare type IThemesBase<K extends keyof typeof styleThemes> = IThemesModes<K, IThemeWebBase>;
export declare type IThemesModes<K extends keyof typeof styleThemes, T> = {
    [P in K]: {
        light: T;
        dark: T;
    };
};
