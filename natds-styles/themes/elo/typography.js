var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typography = void 0;
/* eslint-disable import/prefer-default-export */
var natds_themes_1 = __importDefault(require("@naturacosmeticos/natds-themes"));
var typographyFromTheme = natds_themes_1.default.elo.light.typography;
exports.typography = {
    body: {
        regular: {
            fontFamily: "\"".concat(typographyFromTheme.body.regular.fontFamily, "\", ").concat(typographyFromTheme.fallback.fontFamily),
            fontWeight: typographyFromTheme.body.regular.fontWeight
        },
        bold: {
            fontFamily: "\"".concat(typographyFromTheme.body.bold.fontFamily, "\", ").concat(typographyFromTheme.fallback.fontFamily),
            fontWeight: typographyFromTheme.body.bold.fontWeight
        }
    },
    display: {
        fontFamily: "\"".concat(typographyFromTheme.display.fontFamily, "\", ").concat(typographyFromTheme.fallback.fontFamily),
        fontWeight: typographyFromTheme.display.fontWeight
    },
    headline: {
        fontFamily: "\"".concat(typographyFromTheme.headline.fontFamily, "\", ").concat(typographyFromTheme.fallback.fontFamily),
        fontWeight: typographyFromTheme.headline.fontWeight
    },
    fontFamily: "\"".concat(typographyFromTheme.fontFamily.primary, "\", ").concat(typographyFromTheme.fontFamily.secondary),
    /**
     * @deprecated `fontFamilyBrand1` deprecated since v4.2.2
     * Please, use `body` or `display` or `headline` instead
     */
    fontFamilyBrand1: "\"".concat(typographyFromTheme.fontFamily.branding, " Display\""),
    /**
     * @deprecated `fontFamilyBrand2` deprecated since v4.2.2
     * Please, use `body` or `display` or `headline` instead
     */
    fontFamilyBrand2: "\"".concat(typographyFromTheme.fontFamily.branding, " Text\""),
    /**
     * @deprecated `fontFamilyBrand3` deprecated since v4.2.2
     * Please, use `body` or `display` or `headline` instead
     */
    fontFamilyBrand3: null,
    /**
     * @deprecated `fontWeightLight` deprecated since v4.2.2
     * Please, use `body` or `display` or `headline` instead
     */
    fontWeightLight: 300,
    fontWeightRegular: typographyFromTheme.fontWeight.regular,
    /**
     * @deprecated `fontWeightMedium` deprecated since v4.2.2
     * Please, use `body` or `display` or `headline` instead
     */
    fontWeightMedium: typographyFromTheme.fontWeight.medium,
    /**
     * @deprecated `fontWeightBold` deprecated since v4.2.2
     * Please, use `body` or `display` or `headline` instead
     */
    fontWeightBold: 700
};
//# sourceMappingURL=typography.js.map