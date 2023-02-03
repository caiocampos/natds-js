Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonSizes = exports.getButtonSizes = void 0;
var sizes_1 = require("../sizes");
var getButtonSizes = function (theme) {
    var themeSizes = (0, sizes_1.getSizes)(theme);
    return {
        small: {
            paddingTop: themeSizes.none,
            paddingRight: themeSizes.tiny,
            paddingBottom: themeSizes.none,
            paddingLeft: themeSizes.tiny,
            height: themeSizes.semi
        },
        medium: {
            height: themeSizes.semiX,
            paddingTop: themeSizes.none,
            paddingRight: themeSizes.small - themeSizes.micro,
            paddingBottom: themeSizes.none,
            paddingLeft: themeSizes.small - themeSizes.micro
        },
        large: {
            paddingTop: themeSizes.none,
            paddingRight: themeSizes.small,
            paddingBottom: themeSizes.none,
            paddingLeft: themeSizes.small,
            height: themeSizes.medium
        }
    };
};
exports.getButtonSizes = getButtonSizes;
/**
 * Button size tokens are used by MuiButton override, for properties `root`, `sizeLarge`, `sizeSmall`
 */
exports.buttonSizes = {
    small: {
        paddingTop: sizes_1.sizes.none,
        paddingRight: sizes_1.sizes.tiny,
        paddingBottom: sizes_1.sizes.none,
        paddingLeft: sizes_1.sizes.tiny,
        height: sizes_1.sizes.semi
    },
    medium: {
        /**
         * @todo remove warning: 'semiX' should probably not be assigned to 'height'
         */
        height: sizes_1.sizes.semiX,
        paddingTop: sizes_1.sizes.none,
        paddingRight: sizes_1.sizes.small - sizes_1.sizes.micro,
        paddingBottom: sizes_1.sizes.none,
        paddingLeft: sizes_1.sizes.small - sizes_1.sizes.micro
    },
    large: {
        paddingTop: sizes_1.sizes.none,
        paddingRight: sizes_1.sizes.small,
        paddingBottom: sizes_1.sizes.none,
        paddingLeft: sizes_1.sizes.small,
        height: sizes_1.sizes.medium
    }
};
//# sourceMappingURL=index.js.map