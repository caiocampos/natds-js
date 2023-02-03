Object.defineProperty(exports, "__esModule", { value: true });
exports.avatarSizes = exports.getAvatarSizes = void 0;
var sizes_1 = require("../sizes");
var getAvatarSizes = function (theme) {
    var themeSizes = (0, sizes_1.getSizes)(theme);
    return {
        tiny: {
            fontSize: '.625rem',
            size: themeSizes.standard
        },
        small: {
            fontSize: '.875rem',
            size: themeSizes.semi
        },
        standard: {
            fontSize: '1rem',
            size: themeSizes.semiX
        },
        large: {
            fontSize: '1rem',
            size: themeSizes.medium
        },
        huge: {
            fontSize: '1.5rem',
            size: themeSizes.largeXX
        }
    };
};
exports.getAvatarSizes = getAvatarSizes;
/**
 * @todo move/refactor to natds-themes
 */
exports.avatarSizes = {
    tiny: {
        /**
         * @todo move/refactor to natds-themes
         */
        fontSize: '.625rem',
        size: sizes_1.sizes.standard
    },
    small: {
        /**
         * @todo move/refactor to natds-themes
         */
        fontSize: '.875rem',
        size: sizes_1.sizes.semi
    },
    standard: {
        /**
         * @todo move/refactor to natds-themes
         */
        fontSize: '1rem',
        size: sizes_1.sizes.semiX
    },
    large: {
        /**
         * @todo move/refactor to natds-themes
         */
        fontSize: '1rem',
        size: sizes_1.sizes.medium
    },
    huge: {
        /**
         * @todo move/refactor to natds-themes
         */
        fontSize: '1.5rem',
        size: sizes_1.sizes.largeXX
    }
};
//# sourceMappingURL=index.js.map