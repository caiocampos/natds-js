var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var makeStyles_1 = __importDefault(require("@material-ui/core/styles/makeStyles"));
var createStyles_1 = __importDefault(require("@material-ui/core/styles/createStyles"));
var useSizeStyleProp_1 = require("../../hooks/useSizeStyleProp");
exports.useStyles = (0, makeStyles_1.default)(function (theme) { return (0, createStyles_1.default)({
    root: function (_a) {
        var _b;
        var disableSelection = _a.disableSelection, height = _a.height, maxHeight = _a.maxHeight, maxWidth = _a.maxWidth, radius = _a.radius, width = _a.width;
        return ({
            borderRadius: radius ? (_b = theme.shape) === null || _b === void 0 ? void 0 : _b.borderRadius : 'none',
            height: (0, useSizeStyleProp_1.getSizeStyleProp)({
                theme: theme,
                value: height
            }),
            maxHeight: (0, useSizeStyleProp_1.getSizeStyleProp)({
                theme: theme,
                value: maxHeight
            }),
            maxWidth: (0, useSizeStyleProp_1.getSizeStyleProp)({
                theme: theme,
                value: maxWidth
            }),
            userSelect: disableSelection ? 'none' : 'auto',
            width: (0, useSizeStyleProp_1.getSizeStyleProp)({
                theme: theme,
                value: width
            })
        });
    },
    container: function (_a) {
        var _b;
        var disableSelection = _a.disableSelection, radius = _a.radius;
        return ({
            borderRadius: radius ? (_b = theme.shape) === null || _b === void 0 ? void 0 : _b.borderRadius : 'none',
            display: 'inline-block',
            lineHeight: '0px',
            position: 'relative',
            userSelect: disableSelection ? 'none' : 'auto'
        });
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        borderRadius: function (_a) {
            var _b;
            var radius = _a.radius;
            return (radius ? (_b = theme.shape) === null || _b === void 0 ? void 0 : _b.borderRadius : 'none');
        },
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        opacity: '0',
        '&:hover': {
            opacity: '1'
        },
        transition: 'opacity .3s'
    }
}); }, { name: 'NatDSImage' });
exports.default = exports.useStyles;
//# sourceMappingURL=Image.styles.js.map