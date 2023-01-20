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
exports.Image = void 0;
// eslint-disable-next-line no-use-before-define
var React = __importStar(require("react"));
var useTheme_1 = __importDefault(require("@material-ui/core/styles/useTheme"));
var clsx_1 = __importDefault(require("clsx"));
var Image_styles_1 = require("./Image.styles");
var useSizeStyleProp_1 = require("../../hooks/useSizeStyleProp");
exports.Image = React.forwardRef(
// eslint-disable-next-line complexity, max-statements
function (props, ref) {
    var alt = props.alt, className = props.className, draggable = props.draggable, disableSelection = props.disableSelection, fallback = props.fallback, height = props.height, maxHeight = props.maxHeight, maxWidth = props.maxWidth, radius = props.radius, state = props.state, style = props.style, src = props.src, width = props.width, otherProps = __rest(props, ["alt", "className", "draggable", "disableSelection", "fallback", "height", "maxHeight", "maxWidth", "radius", "state", "style", "src", "width"]);
    var classes = (0, Image_styles_1.useStyles)({
        alt: alt,
        disableSelection: disableSelection,
        height: height,
        maxHeight: maxHeight,
        maxWidth: maxWidth,
        radius: radius,
        state: state,
        src: src,
        width: width
    });
    var theme = (0, useTheme_1.default)();
    var heightAttribute = (0, useSizeStyleProp_1.getSizeStyleProp)({
        theme: theme,
        value: height
    });
    var widthAttribute = (0, useSizeStyleProp_1.getSizeStyleProp)({
        theme: theme,
        value: width
    });
    var _a = React.useState({ src: src, error: false }), imageSrc = _a[0], setImageSrc = _a[1];
    var onError = function () {
        if (!imageSrc.error) {
            setImageSrc({ src: fallback, error: true });
            return null;
        }
        return null;
    };
    var heightAttr = heightAttribute === 'auto' ? '' : heightAttribute;
    var widthAttr = widthAttribute === 'auto' ? '' : widthAttribute;
    if (state) {
        return (React.createElement("div", { className: classes.container },
            React.createElement("img", __assign({ alt: alt, className: (0, clsx_1.default)(classes.root, className), draggable: draggable, height: heightAttr, onError: onError, ref: ref, src: imageSrc.src, style: style, width: widthAttr }, otherProps)),
            React.createElement("div", { className: classes.overlay })));
    }
    return (React.createElement("img", __assign({ alt: alt, className: (0, clsx_1.default)(classes.root, className), draggable: draggable, height: heightAttr, onError: onError, ref: ref, src: imageSrc.src, style: style, width: widthAttr }, otherProps)));
});
exports.Image.displayName = 'Image';
exports.default = exports.Image;
//# sourceMappingURL=Image.js.map