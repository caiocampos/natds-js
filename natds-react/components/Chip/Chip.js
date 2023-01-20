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
var Chip_styles_1 = __importDefault(require("./Chip.styles"));
var Icon_1 = __importDefault(require("../Icon"));
var Avatar_1 = __importDefault(require("../Avatar"));
var Ripple_1 = __importDefault(require("../Ripple"));
var Chip = react_1.default.forwardRef(function (props, ref) {
    var _a = props.className, className = _a === void 0 ? '' : _a, labelText = props.labelText, leftIcon = props.leftIcon, rightIcon = props.rightIcon, _b = props.color, color = _b === void 0 ? 'neutral' : _b, leftAvatar = props.leftAvatar, rightAvatar = props.rightAvatar, _c = props.disabled, disabled = _c === void 0 ? false : _c, _d = props.selected, selected = _d === void 0 ? false : _d, customBackground = props.customBackground, customBorderColor = props.customBorderColor, customLabelColor = props.customLabelColor, _e = props.size, size = _e === void 0 ? 'semi' : _e, onClick = props.onClick, rest = __rest(props, ["className", "labelText", "leftIcon", "rightIcon", "color", "leftAvatar", "rightAvatar", "disabled", "selected", "customBackground", "customBorderColor", "customLabelColor", "size", "onClick"]);
    var _f = (0, Chip_styles_1.default)({
        color: color,
        hasLeftAvatar: !!leftAvatar,
        hasRightAvatar: !!rightAvatar,
        hasLeftIcon: !!leftIcon,
        hasRightIcon: !!rightIcon,
        isDisabled: disabled,
        isSelected: selected,
        customBackground: customBackground,
        customBorderColor: customBorderColor,
        customLabelColor: customLabelColor,
        size: size
    }), wrapper = _f.wrapper, label = _f.label;
    return (react_1.default.createElement(Ripple_1.default, { disabled: disabled, isCentered: true },
        react_1.default.createElement("button", __assign({ ref: ref, type: "button", className: "".concat(className, " ").concat(wrapper), disabled: disabled, onClick: onClick }, rest),
            !!leftAvatar && react_1.default.createElement(Avatar_1.default, { type: "image", src: leftAvatar, size: "standard" }),
            !!leftIcon && react_1.default.createElement(Icon_1.default, { size: "standard", name: leftIcon, color: "highEmphasis" }),
            react_1.default.createElement("span", { className: label }, labelText),
            !!rightIcon && react_1.default.createElement(Icon_1.default, { size: "standard", name: rightIcon, color: "highEmphasis" }),
            !!rightAvatar && react_1.default.createElement(Avatar_1.default, { type: "image", src: rightAvatar, size: "standard" }))));
});
exports.default = Chip;
//# sourceMappingURL=Chip.js.map