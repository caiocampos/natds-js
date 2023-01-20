Object.defineProperty(exports, "__esModule", { value: true });
var avatarSizes_1 = require("./tokens/avatarSizes");
var buttonSizes_1 = require("./tokens/buttonSizes");
var themeBound_1 = require("./tokens/colors/themeBound");
var elevation_1 = require("./tokens/elevation");
var typography_1 = require("./tokens/typography");
var iconSizes_1 = require("./tokens/iconSizes");
var natura_1 = require("./tokens/colors/natura");
var opacity_1 = require("./tokens/opacity");
var overlay_1 = require("./tokens/overlay");
var radius_1 = require("./tokens/radius");
var sizes_1 = require("./tokens/sizes");
var spacing_1 = require("./tokens/spacing");
exports.default = {
    avatarSizes: avatarSizes_1.avatarSizes,
    buttonSizes: buttonSizes_1.buttonSizes,
    /**
     * @deprecated `colorTokens` are deprecated since version v0.20 and will be removed on v1.0.
     * Please use `theme.${brand}.${mode}.color`
     */
    colorTokens: themeBound_1.colorTokens,
    /**
     * @deprecated `colors` is deprecated since version v0.20 and will be removed on v1.0.
     * Please use `theme.natura.${mode}.color`
     */
    colors: { natura: natura_1.natura },
    elevation: elevation_1.elevation,
    fontSize: typography_1.fontSize,
    iconSizes: iconSizes_1.iconSizes,
    opacity: opacity_1.opacity,
    overlay: overlay_1.overlay,
    radius: radius_1.radius,
    sizes: sizes_1.sizes,
    spacing: spacing_1.spacing
};
//# sourceMappingURL=tokens.js.map