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
exports.AvatarImage = exports.isAvatarImage = void 0;
var react_1 = __importDefault(require("react"));
var Avatar_styles_1 = __importDefault(require("./Avatar.styles"));
var isAvatarImage = function (props) { return props.type === 'image'; };
exports.isAvatarImage = isAvatarImage;
var AvatarImage = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'medium' : _b, className = _a.className, props = __rest(_a, ["size", "className"]);
    var image = (0, Avatar_styles_1.default)({ size: size }).image;
    return (react_1.default.createElement(react_1.default.Fragment, null, (0, exports.isAvatarImage)(props) && (react_1.default.createElement("img", __assign({ className: "".concat(className, " ").concat(image) }, props)))));
};
exports.AvatarImage = AvatarImage;
exports.default = exports.AvatarImage;
//# sourceMappingURL=AvatarImage.js.map