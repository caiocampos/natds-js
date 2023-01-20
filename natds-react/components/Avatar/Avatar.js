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
exports.renderVariant = void 0;
var react_1 = __importDefault(require("react"));
var Avatar_styles_1 = __importDefault(require("./Avatar.styles"));
var AvatarImage_1 = __importDefault(require("./AvatarImage"));
var AvatarIcon_1 = __importDefault(require("./AvatarIcon"));
var AvatarLabel_1 = __importDefault(require("./AvatarLabel"));
var renderVariant = function (props) {
    var type = props.type;
    var types = {
        image: react_1.default.createElement(AvatarImage_1.default, __assign({}, props)),
        label: react_1.default.createElement(AvatarLabel_1.default, __assign({}, props)),
        icon: react_1.default.createElement(AvatarIcon_1.default, __assign({}, props))
    };
    return types[type];
};
exports.renderVariant = renderVariant;
var Avatar = react_1.default.forwardRef(function (props, ref) {
    var _a = props.className, className = _a === void 0 ? '' : _a, _b = props.size, size = _b === void 0 ? 'medium' : _b, _c = props.type, type = _c === void 0 ? 'icon' : _c, rest = __rest(props, ["className", "size", "type"]);
    var surface = (0, Avatar_styles_1.default)({ size: size }).surface;
    return (react_1.default.createElement("span", __assign({ className: "".concat(className, " ").concat(surface), ref: ref }, rest), (0, exports.renderVariant)(__assign(__assign({}, props), { size: size, type: type }))));
});
exports.default = Avatar;
//# sourceMappingURL=Avatar.js.map