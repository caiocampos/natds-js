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
var react_1 = __importDefault(require("react"));
var Image_styles_1 = __importDefault(require("./Image.styles"));
var Image = react_1.default.forwardRef(function (props, ref) {
    var _a = props.className, className = _a === void 0 ? '' : _a, sourceImage = props.sourceImage, fallbackImage = props.fallbackImage, _b = props.alternativeText, alternativeText = _b === void 0 ? '' : _b, _c = props.highlight, highlight = _c === void 0 ? false : _c, fade = props.fade, border = props.border, children = props.children, rest = __rest(props, ["className", "sourceImage", "fallbackImage", "alternativeText", "highlight", "fade", "border", "children"]);
    var _d = (0, Image_styles_1.default)({ highlight: highlight, fade: fade, border: border }), wrapper = _d.wrapper, overlay = _d.overlay;
    var onError = function (currentTarget) {
        if (fallbackImage) {
            // eslint-disable-next-line no-param-reassign
            currentTarget.src = fallbackImage;
        }
    };
    return (react_1.default.createElement("div", { className: "".concat(className, " ").concat(wrapper) },
        react_1.default.createElement("img", __assign({}, rest, { ref: ref, src: sourceImage, alt: alternativeText, onError: function (_a) {
                var currentTarget = _a.currentTarget;
                return onError(currentTarget);
            } })),
        highlight && react_1.default.createElement("div", { className: overlay, "data-testid": "image-overlay" }, children)));
});
exports.default = Image;
//# sourceMappingURL=Image.js.map