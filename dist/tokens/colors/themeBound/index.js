Object.defineProperty(exports, "__esModule", { value: true });
exports.colorTokens = exports.getColorTokens = void 0;
var natura_1 = require("./natura");
var avon_1 = require("./avon");
var theBodyShop_1 = require("./theBodyShop");
var aesop_1 = require("./aesop");
var biome_1 = require("./biome");
var getColorTokens = function (theme) {
    var themeColor = theme.color;
    return {
        colorPrimary: themeColor.primary,
        colorOnPrimary: themeColor.onPrimary,
        colorPrimaryLight: themeColor.primaryLight,
        colorOnPrimaryLight: themeColor.onPrimaryLight,
        colorPrimaryDark: themeColor.primaryDark,
        colorOnPrimaryDark: themeColor.onPrimaryDark,
        colorSecondary: themeColor.secondary,
        colorOnSecondary: themeColor.onSecondary,
        colorSecondaryLight: themeColor.secondaryLight,
        colorOnSecondaryLight: themeColor.onSecondaryLight,
        colorSecondaryDark: themeColor.secondaryDark,
        colorOnSecondaryDark: themeColor.onSecondaryDark,
        colorBackground: themeColor.background,
        colorOnBackground: themeColor.onBackground,
        colorSurface: themeColor.surface,
        colorOnSurface: themeColor.onSurface,
        colorHighlight: themeColor.highlight,
        colorHighEmphasis: themeColor.highEmphasis,
        colorMediumEmphasis: themeColor.mediumEmphasis,
        colorLowEmphasis: themeColor.lowEmphasis,
        colorLink: themeColor.link,
        colorOnLink: themeColor.onLink,
        colorSuccess: themeColor.success,
        colorOnSuccess: themeColor.onSuccess,
        colorWarning: themeColor.warning,
        colorOnWarning: themeColor.onWarning,
        colorAlert: themeColor.alert,
        colorOnAlert: themeColor.onAlert
    };
};
exports.getColorTokens = getColorTokens;
/**
 * @deprecated theme-bound `colorTokens` are deprecated since v0.20 and will be removed at v1.0.
 * Please use `theme.${brand}.${mode}.color` from `natds-themes`.
 */
exports.colorTokens = {
    /**
     * @deprecated `avonDarkColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.avon.dark.color` from `natds-themes`.
     */
    avonDarkColorTokens: avon_1.avonDarkColorTokens,
    /**
     * @deprecated `avonLightColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.avon.light.color` from `natds-themes`.
     */
    avonLightColorTokens: avon_1.avonLightColorTokens,
    /**
     * @deprecated `naturaDarkColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.natura.dark.color` from `natds-themes`.
     */
    naturaDarkColorTokens: natura_1.naturaDarkColorTokens,
    /**
     * @deprecated `naturaLightColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.natura.light.color` from `natds-themes`.
     */
    naturaLightColorTokens: natura_1.naturaLightColorTokens,
    /**
     * @deprecated `theBodyShopDarkColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.theBodyShop.dark.color` from `natds-themes`.
     */
    theBodyShopDarkColorTokens: theBodyShop_1.theBodyShopDarkColorTokens,
    /**
     * @deprecated `theBodyShopLightColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.theBodyShop.light.colors` from `natds-themes`.
     */
    theBodyShopLightColorTokens: theBodyShop_1.theBodyShopLightColorTokens,
    /**
     * @deprecated `aesopDarkColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.aesop.dark.color` from `natds-themes`.
     */
    aesopDarkColorTokens: aesop_1.aesopDarkColorTokens,
    /**
     * @deprecated `aesopLightColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.aesop.light.colors` from `natds-themes`.
     */
    aesopLightColorTokens: aesop_1.aesopLightColorTokens,
    /**
     * @deprecated `aesopDarkColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.aesop.dark.color` from `natds-themes`.
     */
    biomeDarkColorTokens: biome_1.biomeDarkColorTokens,
    /**
     * @deprecated `biomeLightColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.biome.light.colors` from `natds-themes`.
     */
    biomeLightColorTokens: biome_1.biomeLightColorTokens
};
//# sourceMappingURL=index.js.map