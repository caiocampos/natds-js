"use strict";
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
exports.AvatarIcon = exports.convertIconSize = exports.isAvatarIcon = void 0;
var react_1 = __importDefault(require("react"));
var Avatar_styles_1 = __importDefault(require("./Avatar.styles"));
var Icon_1 = __importDefault(require("../Icon"));
var isAvatarIcon = function (props) { return props.type === 'icon'; };
exports.isAvatarIcon = isAvatarIcon;
var convertIconSize = function (size) {
    var iconSize = {
        standard: 'small',
        semi: 'standard',
        semiX: 'semi',
        medium: 'semiX',
        largeXXX: 'largeX'
    };
    return size && iconSize[size];
};
exports.convertIconSize = convertIconSize;
var AvatarIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'medium' : _b, className = _a.className, props = __rest(_a, ["size", "className"]);
    var icon = (0, Avatar_styles_1.default)({ size: size }).icon;
    return (react_1.default.createElement(react_1.default.Fragment, null, (0, exports.isAvatarIcon)(props) && (react_1.default.createElement(Icon_1.default, { className: "".concat(className, " ").concat(icon), name: props.name, size: (0, exports.convertIconSize)(size), color: "onPrimary" }))));
};
exports.AvatarIcon = AvatarIcon;
exports.default = exports.AvatarIcon;
//# sourceMappingURL=AvatarIcon.js.map