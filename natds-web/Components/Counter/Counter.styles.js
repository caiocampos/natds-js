var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = exports.getInputHeight = exports.getButtonheight = exports.INPUT_DIFFERENCE = void 0;
var createStyles_1 = __importDefault(require("@material-ui/core/styles/createStyles"));
var makeStyles_1 = __importDefault(require("@material-ui/core/styles/makeStyles"));
var natds_styles_1 = require("@naturacosmeticos/natds-styles");
var sizes = natds_styles_1.tokens.sizes;
exports.INPUT_DIFFERENCE = 2;
var getButtonheight = function (_a) {
    var size = _a.size;
    return (size === 'small' ? sizes === null || sizes === void 0 ? void 0 : sizes.semiX : sizes === null || sizes === void 0 ? void 0 : sizes.medium);
};
exports.getButtonheight = getButtonheight;
var getInputHeight = function (props) { return (0, exports.getButtonheight)(props) - exports.INPUT_DIFFERENCE; };
exports.getInputHeight = getInputHeight;
var style = function (theme) { return (0, createStyles_1.default)({
    button: {
        minHeight: exports.getButtonheight,
        '&:last-child': {
            borderLeft: 0
        }
    },
    input: {
        textAlign: 'center',
        width: "".concat(sizes.semiX, "px !important"),
        '& .MuiInput-root': {
            borderRadius: 0,
            padding: 0
        },
        '& .MuiInput-input': {
            minHeight: exports.getInputHeight,
            padding: 0,
            '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
                WebkitAppearance: 'none'
            }
        }
    },
    group: {
        display: 'flex',
        alignItems: 'center'
    }
}); };
exports.useStyles = (0, makeStyles_1.default)(style, { name: 'NatDSCounter' });
exports.default = exports.useStyles;
//# sourceMappingURL=Counter.styles.js.map