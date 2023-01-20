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
var Icon_1 = __importDefault(require("../Icon"));
var Alert_styles_1 = __importDefault(require("./Alert.styles"));
var DEFAULT_ICONS = {
    info: 'outlined-alert-info',
    success: 'outlined-alert-check',
    error: 'outlined-alert-cancel',
    warning: 'outlined-alert-warning'
};
var Alert = react_1.default.forwardRef(function (props, ref) {
    var _a = props.className, className = _a === void 0 ? '' : _a, _b = props.color, color = _b === void 0 ? 'info' : _b, title = props.title, _c = props.type, type = _c === void 0 ? 'contained' : _c, _d = props.showIcon, showIcon = _d === void 0 ? true : _d, customIcon = props.customIcon, customBackgroundColor = props.customBackgroundColor, customIconColor = props.customIconColor, customTextColor = props.customTextColor, customBorderColor = props.customBorderColor, rest = __rest(props, ["className", "color", "title", "type", "showIcon", "customIcon", "customBackgroundColor", "customIconColor", "customTextColor", "customBorderColor"]);
    var _e = (0, Alert_styles_1.default)({
        color: color,
        borderType: type,
        customBackgroundColor: customBackgroundColor,
        customIconColor: customIconColor,
        customTextColor: customTextColor,
        customBorderColor: customBorderColor
    }), wrapper = _e.wrapper, content = _e.content;
    var renderIcon = function () {
        var iconName;
        if (color === 'custom' && customIcon) {
            iconName = customIcon;
        }
        if (color !== 'custom') {
            iconName = DEFAULT_ICONS[color];
        }
        return iconName ? react_1.default.createElement(Icon_1.default, { size: "standard", name: iconName, color: "highEmphasis" }) : null;
    };
    return (react_1.default.createElement("div", __assign({ className: "".concat(className, " ").concat(wrapper), ref: ref }, rest),
        showIcon && renderIcon(),
        react_1.default.createElement("div", { className: content },
            title && react_1.default.createElement("h6", null, title),
            props.children)));
});
exports.default = Alert;
//# sourceMappingURL=Alert.js.map