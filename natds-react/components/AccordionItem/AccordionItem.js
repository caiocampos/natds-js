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
var AccordionItem_styles_1 = __importDefault(require("./AccordionItem.styles"));
var Icon_1 = __importDefault(require("../Icon"));
var AccordionItem = react_1.default.forwardRef(function (props, ref) {
    var _a = props.className, className = _a === void 0 ? '' : _a, title = props.title, legendText = props.legend, _b = props.color, color = _b === void 0 ? 'regular' : _b, _c = props.isActive, isActive = _c === void 0 ? false : _c, _d = props.isDisabled, isDisabled = _d === void 0 ? false : _d, onClick = props.onClick, children = props.children, rest = __rest(props, ["className", "title", "legend", "color", "isActive", "isDisabled", "onClick", "children"]);
    var _e = (0, AccordionItem_styles_1.default)({ color: color, isActive: isActive, isDisabled: isDisabled }), wrapper = _e.wrapper, header = _e.header, content = _e.content, legend = _e.legend;
    var setIconColor = function () {
        if (isDisabled) {
            return 'mediumEmphasis';
        }
        return color === 'regular' ? 'primary' : 'highEmphasis';
    };
    return (react_1.default.createElement("div", __assign({ className: "".concat(className, " ").concat(wrapper), ref: ref }, rest),
        react_1.default.createElement("div", { className: header, onClick: onClick },
            react_1.default.createElement("div", null,
                title,
                react_1.default.createElement(Icon_1.default, { name: isActive
                        ? 'outlined-navigation-arrowtop'
                        : 'outlined-navigation-arrowbottom', size: "standard", color: setIconColor() })),
            legendText && react_1.default.createElement("span", { className: legend }, legendText)),
        isActive && (react_1.default.createElement("div", { className: content }, children))));
});
exports.default = AccordionItem;
//# sourceMappingURL=AccordionItem.js.map