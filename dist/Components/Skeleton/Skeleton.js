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
exports.Skeleton = void 0;
var React = __importStar(require("react"));
var Skeleton_1 = __importDefault(require("@material-ui/lab/Skeleton"));
var useTheme_1 = __importDefault(require("@material-ui/core/styles/useTheme"));
var useSizeStyleProp_1 = require("../../hooks/useSizeStyleProp");
/**
 * Display a placeholder preview of your content before the data gets loaded to reduce
 * load-time frustration.
 *
 * The data for your components might not be immediately available.<br />
 * You can increase the perceived performance for users by using skeletons.
 *
 * It feels like things are happening immediately, then the information is incrementally displayed on the screen.<br />
 * Read more on [Avoid The Spinner](https://www.lukew.com/ff/entry.asp?1797).
 *
 * ## Importing
 *
 * ```
 * import { Skeleton } from "@naturacosmeticos/natds-web";
 * ```
 */
exports.Skeleton = React.forwardRef(function (props, ref) {
    var height = props.height, width = props.width, otherProps = __rest(props, ["height", "width"]);
    var theme = (0, useTheme_1.default)();
    var heightAttribute = (0, useSizeStyleProp_1.getSizeStyleProp)({
        theme: theme,
        value: height
    });
    var widthAttribute = (0, useSizeStyleProp_1.getSizeStyleProp)({
        theme: theme,
        value: width
    });
    return (React.createElement(Skeleton_1.default, __assign({}, otherProps, { height: heightAttribute, width: widthAttribute, ref: ref })));
});
exports.Skeleton.displayName = 'Skeleton';
exports.default = exports.Skeleton;
//# sourceMappingURL=Skeleton.js.map