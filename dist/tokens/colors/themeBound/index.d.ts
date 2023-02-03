import { Theme } from '@naturacosmeticos/natds-themes';
import { IColorThemeTokens } from './IColorThemeTokens';
export declare const getColorTokens: (theme: Theme) => IColorThemeTokens;
/**
 * @deprecated theme-bound `colorTokens` are deprecated since v0.20 and will be removed at v1.0.
 * Please use `theme.${brand}.${mode}.color` from `natds-themes`.
 */
export declare const colorTokens: {
    /**
     * @deprecated `avonDarkColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.avon.dark.color` from `natds-themes`.
     */
    avonDarkColorTokens: IColorThemeTokens;
    /**
     * @deprecated `avonLightColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.avon.light.color` from `natds-themes`.
     */
    avonLightColorTokens: IColorThemeTokens;
    /**
     * @deprecated `naturaDarkColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.natura.dark.color` from `natds-themes`.
     */
    naturaDarkColorTokens: IColorThemeTokens;
    /**
     * @deprecated `naturaLightColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.natura.light.color` from `natds-themes`.
     */
    naturaLightColorTokens: IColorThemeTokens;
    /**
     * @deprecated `theBodyShopDarkColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.theBodyShop.dark.color` from `natds-themes`.
     */
    theBodyShopDarkColorTokens: IColorThemeTokens;
    /**
     * @deprecated `theBodyShopLightColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.theBodyShop.light.colors` from `natds-themes`.
     */
    theBodyShopLightColorTokens: IColorThemeTokens;
    /**
     * @deprecated `aesopDarkColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.aesop.dark.color` from `natds-themes`.
     */
    aesopDarkColorTokens: IColorThemeTokens;
    /**
     * @deprecated `aesopLightColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.aesop.light.colors` from `natds-themes`.
     */
    aesopLightColorTokens: IColorThemeTokens;
    /**
     * @deprecated `aesopDarkColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.aesop.dark.color` from `natds-themes`.
     */
    biomeDarkColorTokens: IColorThemeTokens;
    /**
     * @deprecated `biomeLightColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.biome.light.colors` from `natds-themes`.
     */
    biomeLightColorTokens: IColorThemeTokens;
};
