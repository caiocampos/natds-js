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
exports.Intro = void 0;
// eslint-disable-next-line no-use-before-define
var React = __importStar(require("react"));
var Typography_1 = require("../Typography");
var Intro_styles_1 = __importDefault(require("./Intro.styles"));
/**
 * ## Importing
 *
 * ```
 * import { Intro } from '@naturacosmeticos/natds-web';
 * ```
 */
exports.Intro = React.forwardRef(function (props, ref) {
    var children = props.children, _a = props.component, Component = _a === void 0 ? 'section' : _a, detail = props.detail, _b = props.detailColor, detailColor = _b === void 0 ? 'textPrimary' : _b, _c = props.detailComponent, DetailComponent = _c === void 0 ? Typography_1.Typography : _c, _d = props.detailVariant, detailVariant = _d === void 0 ? 'body2' : _d, title = props.title, _e = props.titleColor, titleColor = _e === void 0 ? 'textPrimary' : _e, _f = props.titleComponent, TitleComponent = _f === void 0 ? Typography_1.Typography : _f, _g = props.titleVariant, titleVariant = _g === void 0 ? 'subtitle1' : _g, otherProps = __rest(props, ["children", "component", "detail", "detailColor", "detailComponent", "detailVariant", "title", "titleColor", "titleComponent", "titleVariant"]);
    var _h = (0, Intro_styles_1.default)(props), introDetail = _h.introDetail, introTitle = _h.introTitle, root = _h.root;
    return (React.createElement(Component, __assign({ className: root, ref: ref }, otherProps),
        React.createElement(TitleComponent, { className: introTitle, color: titleColor, component: "h3", variant: titleVariant }, title),
        detail && (React.createElement(DetailComponent, { className: introDetail, color: detailColor, component: "p", variant: detailVariant }, detail)),
        children));
});
exports.Intro.displayName = 'Intro';
exports.default = exports.Intro;
//# sourceMappingURL=Intro.js.map