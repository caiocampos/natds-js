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
exports.AvatarLabel = exports.isAvatarLabel = void 0;
var react_1 = __importDefault(require("react"));
var Avatar_styles_1 = __importDefault(require("./Avatar.styles"));
var isAvatarLabel = function (props) { return props.type === 'label'; };
exports.isAvatarLabel = isAvatarLabel;
var AvatarLabel = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, props = __rest(_a, ["className", "size"]);
    var label = (0, Avatar_styles_1.default)({ size: size }).label;
    return (react_1.default.createElement(react_1.default.Fragment, null, (0, exports.isAvatarLabel)(props) && (react_1.default.createElement("label", __assign({ className: "".concat(className, " ").concat(label) }, props), props.label ? props.label : 'NA'))));
};
exports.AvatarLabel = AvatarLabel;
exports.default = exports.AvatarLabel;
//# sourceMappingURL=AvatarLabel.js.map