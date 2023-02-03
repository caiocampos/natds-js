var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.opacity = exports.getOpacity = void 0;
/* eslint-disable sort-keys */
var natds_themes_1 = __importDefault(require("@naturacosmeticos/natds-themes"));
var getOpacity = function (theme) {
    var opacity = theme.opacity;
    return __assign(__assign({}, opacity), { '00': opacity.transparent, '04': opacity.lower, '08': opacity.veryLow, 12: opacity.low, 16: opacity.mediumLow, 24: opacity.disabledLow, 32: opacity.disabled, 48: opacity.medium, 56: opacity.mediumHigh, 64: opacity.high, 80: opacity.veryHigh });
};
exports.getOpacity = getOpacity;
var naturaLightOpacity = natds_themes_1.default.natura.light.opacity;
exports.opacity = __assign(__assign({}, naturaLightOpacity), { 
    /**
     * @deprecated `00` as opacity token name is deprecated since 0.19. It will be removed at 1.0.
     * Please use `opacity.transparent` directly from a theme.
     */
    '00': naturaLightOpacity.transparent, 
    /**
     * @deprecated `04` as opacity token name is deprecated since 0.19. It will be removed at 1.0.
     * Please use `opacity.lower` directly from a theme.
     */
    '04': naturaLightOpacity.lower, 
    /**
     * @deprecated `08` as opacity token name is deprecated since 0.19. It will be removed at 1.0.
     * Please use `opacity.veryLow` directly from a theme.
     */
    '08': naturaLightOpacity.veryLow, 
    /**
     * @deprecated `12` as opacity token name is deprecated since 0.19. It will be removed at 1.0.
     * Please use `opacity.low` directly from a theme.
     */
    12: naturaLightOpacity.low, 
    /**
     * @deprecated `16` as opacity token name is deprecated since 0.19. It will be removed at 1.0.
     * Please use `opacity.mediumLow` directly from a theme.
     */
    16: naturaLightOpacity.mediumLow, 
    /**
     * @deprecated `24` as opacity token name is deprecated since 0.19. It will be removed at 1.0.
     * Please use `opacity.disabledLow` directly from a theme.
     */
    24: naturaLightOpacity.disabledLow, 
    /**
     * @deprecated `32` as opacity token name is deprecated since 0.19. It will be removed at 1.0.
     * Please use `opacity.disabled` directly from a theme.
     */
    32: naturaLightOpacity.disabled, 
    /**
     * @deprecated `48` as opacity token name is deprecated since 0.19. It will be removed at 1.0.
     * Please use `opacity.medium` directly from a theme.
     */
    48: naturaLightOpacity.medium, 
    /**
     * @deprecated `56` as opacity token name is deprecated since 0.19. It will be removed at 1.0.
     * Please use `opacity.mediumHigh` directly from a theme.
     */
    56: naturaLightOpacity.mediumHigh, 
    /**
     * @deprecated `64` as opacity token name is deprecated since 0.19. It will be removed at 1.0.
     * Please use `opacity.high` directly from a theme.
     */
    64: naturaLightOpacity.high, 
    /**
     * @deprecated `80` as opacity token name is deprecated since 0.19. It will be removed at 1.0.
     * Please use `opacity.veryHigh` directly from a theme.
     */
    80: naturaLightOpacity.veryHigh });
//# sourceMappingURL=index.js.map