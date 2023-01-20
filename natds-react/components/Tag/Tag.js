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
var Tag_styles_1 = __importDefault(require("./Tag.styles"));
var Tag = react_1.default.forwardRef(function (props, ref) {
    var _a = props.className, className = _a === void 0 ? '' : _a, testID = props.testID, _b = props.size, size = _b === void 0 ? 'small' : _b, _c = props.color, color = _c === void 0 ? 'primary' : _c, _d = props.position, position = _d === void 0 ? 'center' : _d, customBackgroundColor = props.customBackgroundColor, customLabelColor = props.customLabelColor, children = props.children, IconComponent = props.IconComponent, rest = __rest(props, ["className", "testID", "size", "color", "position", "customBackgroundColor", "customLabelColor", "children", "IconComponent"]);
    var _e = (0, Tag_styles_1.default)({
        position: position,
        color: color,
        size: size,
        customBackgroundColor: customBackgroundColor,
        customLabelColor: customLabelColor
    }), container = _e.container, content = _e.content, wrapper = _e.wrapper;
    return (react_1.default.createElement("div", { className: wrapper },
        react_1.default.createElement("div", __assign({ className: "".concat(className, " ").concat(container), "data-testid": testID, ref: ref }, rest),
            react_1.default.createElement(react_1.default.Fragment, null, IconComponent),
            react_1.default.createElement("span", { className: content }, children))));
});
exports.default = Tag;
//# sourceMappingURL=Tag.js.map