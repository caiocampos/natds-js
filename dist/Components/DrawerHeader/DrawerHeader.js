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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.DrawerHeader = void 0;
// eslint-disable-next-line no-use-before-define
var React = __importStar(require("react"));
var Typography_1 = __importDefault(require("../Typography"));
var Avatar_1 = __importDefault(require("../Avatar"));
var DrawerHeader_styles_1 = __importDefault(require("./DrawerHeader.styles"));
/**
 * ## Importing
 *
 * ```
 * import { DrawerHeader } from '@naturacosmeticos/natds-web';
 * ```
 */
exports.DrawerHeader = React.forwardRef(function (props, ref) {
    var avatarChildren = props.avatarChildren, _a = props.avatarComponent, AvatarComponent = _a === void 0 ? Avatar_1.default : _a, avatarSrc = props.avatarSrc, children = props.children, _b = props.component, Component = _b === void 0 ? 'div' : _b, primary = props.primary, secondary = props.secondary, otherProps = __rest(props, ["avatarChildren", "avatarComponent", "avatarSrc", "children", "component", "primary", "secondary"]);
    var _c = (0, DrawerHeader_styles_1.default)(), avatar = _c.avatar, root = _c.root;
    var content = (React.createElement(React.Fragment, null,
        (avatarSrc || avatarChildren) && React.createElement(AvatarComponent, { className: avatar, size: "large", src: avatarSrc }, avatarChildren),
        primary && React.createElement(Typography_1.default, { variant: "h5" }, primary),
        secondary && React.createElement(Typography_1.default, { variant: "subtitle2", color: "textSecondary" }, secondary)));
    if (children) {
        content = React.createElement(React.Fragment, null, children);
    }
    return (React.createElement(Component, __assign({ className: root }, otherProps, { ref: ref }), content));
});
exports.DrawerHeader.displayName = 'DrawerHeader';
exports.default = exports.DrawerHeader;
//# sourceMappingURL=DrawerHeader.js.map