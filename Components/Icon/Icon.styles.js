var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var makeStyles_1 = __importDefault(require("@material-ui/core/styles/makeStyles"));
var core_1 = require("@material-ui/core");
var getFontSize_1 = require("./getFontSize");
var style = function (theme) { return (0, core_1.createStyles)({
    root: function (_a) {
        var size = _a.size;
        return ({
            '-moz-osx-font-smoothing': 'grayscale',
            '-webkit-font-smoothing': 'antialiased',
            display: 'inline-block',
            flexShrink: 0,
            fontFamily: 'natds-icons',
            fontSize: (0, getFontSize_1.getFontSize)({ size: size, theme: theme }),
            /**
             * Overrides the user agent stylesheet for `i` elements
             */
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 400,
            letterSpacing: 'normal',
            lineHeight: 1,
            overflow: 'hidden',
            textRendering: 'auto',
            userSelect: 'none'
        });
    }
}); };
exports.useStyles = (0, makeStyles_1.default)(style, { name: 'NatDSIcon' });
exports.default = exports.useStyles;
//# sourceMappingURL=Icon.styles.js.map