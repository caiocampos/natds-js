import { ThemeBrandName } from '../Themes/ThemeBrandName';
export declare type ThemeMode = 'light' | 'dark';
export declare type Brand = ThemeBrandName;
export declare type CustomOption = 'typography';
export declare const buildTheme: (brand: Brand, mode: ThemeMode, customOption?: "typography" | undefined) => import("../Themes/IThemeWeb").IThemeWebBase;
