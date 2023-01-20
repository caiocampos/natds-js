var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = exports.getLayerSize = void 0;
/* eslint-disable no-magic-numbers */
var createStyles_1 = __importDefault(require("@material-ui/core/styles/createStyles"));
var core_1 = require("@material-ui/core");
var defaultSize = 48;
var getLayerSize = function (_a) {
    var size = _a.size;
    return (size ? size + 4 : defaultSize + 4);
};
exports.getLayerSize = getLayerSize;
var style = function (theme) {
    var _a, _b;
    return (0, createStyles_1.default)({
        circularLayer: {
            backgroundColor: (_b = (_a = theme.palette) === null || _a === void 0 ? void 0 : _a.background) === null || _b === void 0 ? void 0 : _b.paper,
            height: exports.getLayerSize,
            width: exports.getLayerSize,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    });
};
exports.useStyles = (0, core_1.makeStyles)(style, { name: 'NatdDSProgressIndicator' });
exports.default = exports.useStyles;
//# sourceMappingURL=ProgressIndicator.styles.js.map