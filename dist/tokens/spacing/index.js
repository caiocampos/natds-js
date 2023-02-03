Object.defineProperty(exports, "__esModule", { value: true });
exports.spacing = exports.getSpacing = void 0;
var sizes_1 = require("../sizes");
var getSpacing = function (theme) {
    var themeSizes = (0, sizes_1.getSizes)(theme);
    return {
        spacing: themeSizes.tiny,
        spacingNone: themeSizes.none,
        spacingMicro: themeSizes.micro,
        spacingTiny: themeSizes.tiny,
        spacingSmall: themeSizes.small,
        spacingStandard: themeSizes.standard,
        spacingSemi: themeSizes.semi,
        spacingLarge: themeSizes.medium,
        spacingHuge: themeSizes.large,
        spacingHugeX: themeSizes.hugeX,
        spacingHugeXX: themeSizes.hugeXX,
        spacingHugeXXX: themeSizes.hugeXXX,
        spacingVeryHuge: themeSizes.veryHuge
    };
};
exports.getSpacing = getSpacing;
exports.spacing = {
    spacing: sizes_1.sizes.tiny,
    spacingNone: sizes_1.sizes.none,
    spacingMicro: sizes_1.sizes.micro,
    spacingTiny: sizes_1.sizes.tiny,
    spacingSmall: sizes_1.sizes.small,
    spacingStandard: sizes_1.sizes.standard,
    spacingSemi: sizes_1.sizes.semi,
    spacingLarge: sizes_1.sizes.medium,
    spacingHuge: sizes_1.sizes.large,
    spacingHugeX: sizes_1.sizes.hugeX,
    spacingHugeXX: sizes_1.sizes.hugeXX,
    spacingHugeXXX: sizes_1.sizes.hugeXXX,
    spacingVeryHuge: sizes_1.sizes.veryHuge
};
//# sourceMappingURL=index.js.map