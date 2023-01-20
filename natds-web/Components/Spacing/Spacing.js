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
exports.Spacing = void 0;
var React = __importStar(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var core_1 = require("@material-ui/core");
var Spacing_styles_1 = require("./Spacing.styles");
var Spacing = function (props) {
    var children = props.children, className = props.className, _a = props.component, Component = _a === void 0 ? 'div' : _a, display = props.display, 
    // eslint-disable-next-line id-length
    m = props.m, margin = props.margin, marginBottom = props.marginBottom, marginLeft = props.marginLeft, marginRight = props.marginRight, marginTop = props.marginTop, marginX = props.marginX, marginY = props.marginY, mb = props.mb, ml = props.ml, mr = props.mr, mt = props.mt, mx = props.mx, my = props.my, 
    // eslint-disable-next-line id-length
    p = props.p, padding = props.padding, paddingBottom = props.paddingBottom, paddingLeft = props.paddingLeft, paddingRight = props.paddingRight, paddingTop = props.paddingTop, paddingX = props.paddingX, paddingY = props.paddingY, pb = props.pb, pl = props.pl, pr = props.pr, pt = props.pt, px = props.px, py = props.py, style = props.style, otherProps = __rest(props, ["children", "className", "component", "display", "m", "margin", "marginBottom", "marginLeft", "marginRight", "marginTop", "marginX", "marginY", "mb", "ml", "mr", "mt", "mx", "my", "p", "padding", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "paddingX", "paddingY", "pb", "pl", "pr", "pt", "px", "py", "style"]);
    var classes = (0, Spacing_styles_1.useStyles)({
        // eslint-disable-next-line id-length
        m: m,
        margin: margin,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginX: marginX,
        marginY: marginY,
        mb: mb,
        ml: ml,
        mr: mr,
        mt: mt,
        mx: mx,
        my: my,
        // eslint-disable-next-line id-length
        p: p,
        padding: padding,
        paddingBottom: paddingBottom,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        paddingTop: paddingTop,
        paddingX: paddingX,
        paddingY: paddingY,
        pb: pb,
        pl: pl,
        pr: pr,
        pt: pt,
        px: px,
        py: py
    });
    return (React.createElement(core_1.Box, __assign({ component: Component, className: (0, clsx_1.default)(classes.root, className), display: display }, otherProps, { style: style }), children));
};
exports.Spacing = Spacing;
exports.Spacing.displayName = 'Spacing';
exports.default = exports.Spacing;
//# sourceMappingURL=Spacing.js.map