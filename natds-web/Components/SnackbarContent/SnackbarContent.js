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
exports.SnackbarContent = void 0;
var react_1 = __importDefault(require("react"));
var SnackbarContent_1 = __importDefault(require("@material-ui/core/SnackbarContent"));
var clsx_1 = __importDefault(require("clsx"));
var SnackbarContent_styles_1 = require("./SnackbarContent.styles");
/**
 * ## Importing
 *
 * ```
 * import { SnackbarContent } from "@naturacosmeticos/natds-web";
 * ```
 */
exports.SnackbarContent = react_1.default.forwardRef(function (props, ref) {
    var _a = props.color, color = _a === void 0 ? 'default' : _a, className = props.className, rest = __rest(props, ["color", "className"]);
    var classes = (0, SnackbarContent_styles_1.useStyles)();
    var classNames = (0, clsx_1.default)(classes[color], className);
    return (react_1.default.createElement(SnackbarContent_1.default, __assign({}, rest, { className: classNames, ref: ref })));
});
exports.SnackbarContent.displayName = 'SnackbarContent';
exports.default = exports.SnackbarContent;
//# sourceMappingURL=SnackbarContent.js.map