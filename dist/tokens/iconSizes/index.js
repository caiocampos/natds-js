Object.defineProperty(exports, "__esModule", { value: true });
exports.iconSizes = exports.getIconSizes = void 0;
var sizes_1 = require("../sizes");
var getIconSizes = function (theme) {
    var themeSizes = (0, sizes_1.getSizes)(theme);
    return {
        micro: themeSizes.small,
        tiny: themeSizes.standard,
        small: themeSizes.semi,
        standard: themeSizes.medium,
        medium: themeSizes.large,
        large: themeSizes.largeX,
        largex: themeSizes.huge,
        largeX: themeSizes.huge,
        largexx: themeSizes.hugeX,
        largeXX: themeSizes.hugeX,
        huge: themeSizes.hugeXX,
        hugex: themeSizes.hugeXXX,
        hugeX: themeSizes.hugeXXX,
        hugexx: themeSizes.veryHuge,
        hugeXX: themeSizes.veryHuge
    };
};
exports.getIconSizes = getIconSizes;
exports.iconSizes = {
    micro: sizes_1.sizes.small,
    tiny: sizes_1.sizes.standard,
    small: sizes_1.sizes.semi,
    standard: sizes_1.sizes.medium,
    medium: sizes_1.sizes.large,
    large: sizes_1.sizes.largeX,
    /**
     * @deprecated `largex` key is deprecated since version 0.19 and will be deleted in version 1.0.
     * In case you need `largeX` token, please use `largeX` (with capital X) instead of `largex`.
     */
    largex: sizes_1.sizes.huge,
    /**
     * @since 0.19.0
     */
    largeX: sizes_1.sizes.huge,
    /**
     * @deprecated `largexx` key is deprecated since version 0.19 and will be deleted in version 1.0.
     * In case you need `largeXX` token, please use `largeXX` (with capital X) instead of `largexx`.
     */
    largexx: sizes_1.sizes.hugeX,
    /**
     * @since 0.19.0
     */
    largeXX: sizes_1.sizes.hugeX,
    huge: sizes_1.sizes.hugeXX,
    /**
     * @deprecated `hugex` key is deprecated since version 0.19 and will be deleted in version 1.0.
     * In case you need `hugeX` token, please use `hugeX` (with capital X) instead of `hugex`.
     */
    hugex: sizes_1.sizes.hugeXXX,
    /**
     * @since 0.19.0
     */
    hugeX: sizes_1.sizes.hugeXXX,
    /**
     * @deprecated `hugexx` key is deprecated since version 0.19 and will be deleted in version 1.0.
     * In case you need `hugeXX` token, please use `hugeXX` (with capital X) instead of `hugexx`.
     */
    hugexx: sizes_1.sizes.veryHuge,
    /**
     * @since 0.19.0
     */
    hugeXX: sizes_1.sizes.veryHuge
};
//# sourceMappingURL=index.js.map