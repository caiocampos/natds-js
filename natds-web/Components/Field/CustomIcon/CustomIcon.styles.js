var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var createStyles_1 = __importDefault(require("@material-ui/core/styles/createStyles"));
var makeStyles_1 = __importDefault(require("@material-ui/core/styles/makeStyles"));
var style = function (_a) {
    var sizes = _a.sizes;
    return (0, createStyles_1.default)({
        root: {
            cursor: function (_a) {
                var onIconPress = _a.onIconPress;
                return (onIconPress ? 'pointer' : 'default');
            },
            height: sizes === null || sizes === void 0 ? void 0 : sizes.standard,
            position: 'absolute',
            right: sizes === null || sizes === void 0 ? void 0 : sizes.small,
            top: sizes === null || sizes === void 0 ? void 0 : sizes.small,
            width: sizes === null || sizes === void 0 ? void 0 : sizes.standard,
            '&, & > svg': {
                fill: 'inherit !important'
            }
        }
    });
};
exports.useStyles = (0, makeStyles_1.default)(style, { name: 'NatDSCustomIcon' });
exports.default = exports.useStyles;
//# sourceMappingURL=CustomIcon.styles.js.map