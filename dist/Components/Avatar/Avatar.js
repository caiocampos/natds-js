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
exports.Avatar = void 0;
var React = __importStar(require("react"));
var Avatar_1 = __importDefault(require("@material-ui/core/Avatar"));
var makeStyles_1 = __importDefault(require("@material-ui/core/styles/makeStyles"));
var Avatar_styles_1 = __importDefault(require("./Avatar.styles"));
var Icon_1 = require("../Icon");
/**
 * ## Importing
 *
 * For more advanced usages, check [Material UI Avatar docs](https://material-ui.com/components/avatars/)
 *
 * ```
 * import { Avatar } from "@naturacosmeticos/natds-web";
 * ```
 */
exports.Avatar = React.forwardRef(function (props, ref) {
    var color = props.color, size = props.size, 
    /**
     * @deprecated `variant` property is deprecated since 0.19.0.
     * It will be removed on 1.0 and all Avatar variants will be `circle` by default.
     */
    variant = props.variant, otherProps = __rest(props, ["color", "size", "variant"]);
    var useStyles = (0, makeStyles_1.default)(function (theme) { return (0, Avatar_styles_1.default)({ color: color, size: size, theme: theme }); }, { name: 'NatDsAvatar' });
    var classes = useStyles();
    return (React.createElement(Avatar_1.default, __assign({ classes: classes, variant: variant }, otherProps, { ref: ref }), props.children || React.createElement(Icon_1.Icon, { name: "outlined-social-person" })));
});
exports.Avatar.displayName = 'Avatar';
exports.default = exports.Avatar;
//# sourceMappingURL=Avatar.js.map