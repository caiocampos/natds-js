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
exports.elevation = void 0;
/* eslint-disable sort-keys */
var natds_themes_1 = __importDefault(require("@naturacosmeticos/natds-themes"));
var naturaLightElevation = natds_themes_1.default.natura.light.elevation;
exports.elevation = __assign(__assign({}, naturaLightElevation), { 
    /**
     * @deprecated elevation token `0` is deprecated since v0.20 and will be removed at v1.0.
     * Please use `none` elevation token from a theme, like Natura light.
     */
    0: naturaLightElevation.none, 
    /**
     * @deprecated elevation token `1` is deprecated since v0.20 and will be removed at v1.0.
     * Please use `micro` elevation token from a theme, like Natura light.
     */
    1: naturaLightElevation.micro, 
    /**
     * @deprecated elevation token `2` is deprecated since v0.20 and will be removed at v1.0.
     * Please use `tiny` elevation token from a theme, like Natura light.
     */
    2: naturaLightElevation.tiny, 
    /**
     * @deprecated elevation token `3` is deprecated since v0.20 and will be removed at v1.0.
     * Please use `small` elevation token from a theme, like Natura light.
     */
    3: naturaLightElevation.small, 
    /**
     * @deprecated elevation token `4` is deprecated since v0.20 and will be removed at v1.0.
     * Please use `medium` elevation token from a theme, like Natura light.
     */
    4: naturaLightElevation.medium, 
    /**
     * @deprecated elevation token `6` is deprecated since v0.20 and will be removed at v1.0.
     * Please use `large` elevation token from a theme, like Natura light.
     */
    6: naturaLightElevation.large, 
    /**
     * @deprecated elevation token `8` is deprecated since v0.20 and will be removed at v1.0.
     * Please use `largeX` elevation token from a theme, like Natura light.
     */
    8: naturaLightElevation.largeX, 
    /**
     * @deprecated elevation token `9` is deprecated since v0.20 and will be removed at v1.0.
     * Please use `largeXX` elevation token from a theme, like Natura light.
     */
    9: naturaLightElevation.largeXX, 
    /**
     * @deprecated elevation token `12` is deprecated since v0.20 and will be removed at v1.0.
     * Please use `huge` elevation token from a theme, like Natura light.
     */
    12: naturaLightElevation.huge, 
    /**
     * @deprecated elevation token `16` is deprecated since v0.20 and will be removed at v1.0.
     * Please use `hugeX` elevation token from a theme, like Natura light.
     */
    16: naturaLightElevation.hugeX, 
    /**
     * @deprecated elevation token `24` is deprecated since v0.20 and will be removed at v1.0.
     * Please use `hugeXX` elevation token from a theme, like Natura light.
     */
    24: naturaLightElevation.hugeXX });
//# sourceMappingURL=index.js.map