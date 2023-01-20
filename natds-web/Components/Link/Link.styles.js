var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var createStyles_1 = __importDefault(require("@material-ui/core/styles/createStyles"));
var makeStyles_1 = __importDefault(require("@material-ui/core/styles/makeStyles"));
var style = function (_a) {
    var palette = _a.palette;
    return (0, createStyles_1.default)({
        default: function (_a) {
            var _b;
            var color = _a.color;
            if (color !== 'default') {
                return {};
            }
            return {
                color: (_b = palette === null || palette === void 0 ? void 0 : palette.complementary) === null || _b === void 0 ? void 0 : _b.link
            };
        }
    });
};
exports.useStyles = (0, makeStyles_1.default)(style, { name: 'NatDSLink' });
//# sourceMappingURL=Link.styles.js.map