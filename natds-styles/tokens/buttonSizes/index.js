Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonSizes = void 0;
var sizes_1 = require("../sizes");
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