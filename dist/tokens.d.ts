declare const _default: {
    avatarSizes: import(".").IAvatarSizes;
    buttonSizes: import(".").IButtonSizes;
    /**
     * @deprecated `colorTokens` are deprecated since version v0.20 and will be removed on v1.0.
     * Please use `theme.${brand}.${mode}.color`
     */
    colorTokens: {
        avonDarkColorTokens: import("./tokens/colors/themeBound/IColorThemeTokens").IColorThemeTokens;
        avonLightColorTokens: import("./tokens/colors/themeBound/IColorThemeTokens").IColorThemeTokens;
        naturaDarkColorTokens: import("./tokens/colors/themeBound/IColorThemeTokens").IColorThemeTokens;
        naturaLightColorTokens: import("./tokens/colors/themeBound/IColorThemeTokens").IColorThemeTokens;
        theBodyShopDarkColorTokens: import("./tokens/colors/themeBound/IColorThemeTokens").IColorThemeTokens;
        theBodyShopLightColorTokens: import("./tokens/colors/themeBound/IColorThemeTokens").IColorThemeTokens;
        aesopDarkColorTokens: import("./tokens/colors/themeBound/IColorThemeTokens").IColorThemeTokens;
        aesopLightColorTokens: import("./tokens/colors/themeBound/IColorThemeTokens").IColorThemeTokens;
        biomeDarkColorTokens: import("./tokens/colors/themeBound/IColorThemeTokens").IColorThemeTokens;
        biomeLightColorTokens: import("./tokens/colors/themeBound/IColorThemeTokens").IColorThemeTokens;
    };
    /**
     * @deprecated `colors` is deprecated since version v0.20 and will be removed on v1.0.
     * Please use `theme.natura.${mode}.color`
     */
    colors: {
        natura: import("./tokens/colors/natura/IColorsNatura").IColorsNatura;
    };
    elevation: import(".").IElevation;
    fontSize: {
        h1: import(".").IFont;
        h2: import(".").IFont;
        h3: import(".").IFont;
        h4: import(".").IFont;
        h5: import(".").IFont;
        h6: import(".").IFont;
        subtitle1: import(".").IFont;
        subtitle2: import(".").IFont;
        body1: import(".").IFont;
        body2: import(".").IFont;
        button: import(".").IFont;
        caption: import(".").IFont;
        overline: import(".").IFont;
    };
    iconSizes: import(".").IIconSizes;
    opacity: import(".").IOpacity;
    overlay: import(".").IOverlay;
    radius: import(".").IRadius;
    sizes: import(".").ISizes;
    spacing: import(".").ISpacing;
};
export default _default;
