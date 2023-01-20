var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = exports.style = void 0;
var hex_to_rgba_1 = __importDefault(require("hex-to-rgba"));
var styles_1 = require("@material-ui/core/styles");
var rgbAlpha = 0.16;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
var style = function (theme) {
    var styles = {
        selected: {}
    };
    if (theme.palette && theme.palette.primary && theme.palette.primary.main) {
        /**
         * @todo refactor: replace with a solid color and remove !important
         */
        styles.selected = {
            backgroundColor: "".concat((0, hex_to_rgba_1.default)(theme.palette.primary.main, rgbAlpha), " !important")
        };
    }
    return (0, styles_1.createStyles)(styles);
};
exports.style = style;
exports.useStyles = (0, styles_1.makeStyles)(exports.style);
exports.default = exports.useStyles;
//# sourceMappingURL=TableRow.styles.js.map