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
var Icon_1 = require("../Icon");
var Ripple_1 = require("../Ripple");
var Button_styles_1 = __importDefault(require("./Button.styles"));
var Button = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.fullWidth, fullWidth = _d === void 0 ? false : _d, _e = _a.iconPosition, iconPosition = _e === void 0 ? 'right' : _e, onClick = _a.onClick, _f = _a.size, size = _f === void 0 ? 'semiX' : _f, testID = _a.testID, _g = _a.type, type = _g === void 0 ? 'button' : _g, _h = _a.variant, variant = _h === void 0 ? 'contained' : _h, rest = __rest(_a, ["children", "className", "disabled", "fullWidth", "iconPosition", "onClick", "size", "testID", "type", "variant"]);
    var _j = (0, Button_styles_1.default)(__assign({ disabled: disabled, fullWidth: fullWidth, iconPosition: iconPosition, size: size, variant: variant }, rest)), button = _j.button, label = _j.label, labelContainer = _j.labelContainer;
    var theme = (0, react_jss_1.useTheme)();
    var iconColor = theme.button[variant].color.enable.label;
    return (react_1.default.createElement(Ripple_1.Ripple, { disabled: disabled, fullWidth: fullWidth },
        react_1.default.createElement("button", { className: button, "data-testid": testID, disabled: disabled, onClick: onClick, type: type, ref: ref },
            react_1.default.createElement("div", { className: labelContainer },
                react_1.default.createElement("span", { className: label }, children),
                rest.showIcon && react_1.default.createElement(Icon_1.Icon, { name: rest.iconName, color: iconColor })))));
});
exports.default = Button;
//# sourceMappingURL=Button.js.map