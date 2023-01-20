import { BrandThemes, Themes, Theme } from '@naturacosmeticos/natds-themes';
export declare type ThemeMode = keyof BrandThemes;
export declare type Brand = keyof Omit<Themes, 'natdsTest'>;
declare const buildTheme: (brand?: Brand, mode?: ThemeMode) => Theme;
export default buildTheme;
