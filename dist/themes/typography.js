Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypography = void 0;
var getTypography = function (theme) {
    var typography = theme.typography;
    return {
        body: {
            regular: {
                fontFamily: "\"".concat(typography.body.regular.fontFamily, "\", ").concat(typography.fallback.fontFamily),
                fontWeight: typography.body.regular.fontWeight
            },
            bold: {
                fontFamily: "\"".concat(typography.body.bold.fontFamily, "\", ").concat(typography.fallback.fontFamily),
                fontWeight: typography.body.bold.fontWeight
            }
        },
        display: {
            fontFamily: "\"".concat(typography.display.fontFamily, "\", ").concat(typography.fallback.fontFamily),
            fontWeight: typography.display.fontWeight
        },
        headline: {
            fontFamily: "\"".concat(typography.headline.fontFamily, "\", ").concat(typography.fallback.fontFamily),
            fontWeight: typography.headline.fontWeight
        },
        fontFamily: "\"".concat(typography.fontFamily.primary, "\", ").concat(typography.fontFamily.secondary),
        fontFamilyBrand1: "\"".concat(typography.fontFamily.branding, " Display\""),
        fontFamilyBrand2: "\"".concat(typography.fontFamily.branding, " Text\""),
        fontFamilyBrand3: undefined,
        fontWeightLight: 300,
        fontWeightRegular: typography.fontWeight.regular,
        fontWeightMedium: typography.fontWeight.medium,
        fontWeightBold: 700
    };
};
exports.getTypography = getTypography;
exports.default = exports.getTypography;
//# sourceMappingURL=typography.js.map