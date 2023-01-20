"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_jss_1 = require("react-jss");
var Logo_styles_1 = __importDefault(require("./Logo.styles"));
var Logo = react_1.default.forwardRef(function (_a, ref) {
    var _b = _a.color, color = _b === void 0 ? 'neutral' : _b, _c = _a.size, size = _c === void 0 ? 'veryHuge' : _c, _d = _a.model, model = _d === void 0 ? 'a' : _d, _e = _a.arialabel, arialabel = _e === void 0 ? 'logo' : _e, _f = _a.className, className = _f === void 0 ? '' : _f, props = __rest(_a, ["color", "size", "model", "arialabel", "className"]);
    var theme = (0, react_jss_1.useTheme)();
    var root = (0, Logo_styles_1.default)({ size: size, color: color }).root;
    var checkColor = color === 'neutral' ? 'neutral' : 'custom';
    var logo = theme.asset.brand[checkColor][model].file;
    return (react_1.default.createElement("div", __assign({ "aria-label": arialabel, className: "".concat(className, " ").concat(root), 
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML: { __html: logo }, ref: ref, role: "img" }, props)));
});
exports.default = Logo;
//# sourceMappingURL=Logo.js.map