var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable react/no-danger-with-children */
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var Logo_styles_1 = require("./Logo.styles");
var Logo = function (_a) {
    var _b;
    var _c = _a.color, color = _c === void 0 ? 'neutral' : _c, _d = _a.size, size = _d === void 0 ? 'veryHuge' : _d, _e = _a.model, model = _e === void 0 ? 'a' : _e, _f = _a.arialabel, arialabel = _f === void 0 ? 'logo' : _f;
    var theme = (0, styles_1.useTheme)();
    var checkColor = color === 'neutral' ? 'neutral' : 'custom';
    var logo = (_b = theme.asset) === null || _b === void 0 ? void 0 : _b.brand[checkColor][model].file;
    var root = (0, Logo_styles_1.useStyles)({ size: size, color: color, model: model }).root;
    return (react_1.default.createElement("div", { className: root, dangerouslySetInnerHTML: { __html: logo }, role: "img", "aria-label": arialabel }));
};
Logo.displayName = 'Logo';
exports.default = Logo;
//# sourceMappingURL=Logo.js.map