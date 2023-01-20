"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Link_styles_1 = __importDefault(require("./Link.styles"));
var Link = react_1.default.forwardRef(function (_a, ref) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, testID = _a.testID, _c = _a.variant, variant = _c === void 0 ? 'underline' : _c, href = _a.href, hrefLang = _a.hrefLang, text = _a.text, target = _a.target, _d = _a.iconPosition, iconPosition = _d === void 0 ? 'right' : _d, IconComponent = _a.IconComponent, _e = _a.textColor, textColor = _e === void 0 ? 'default' : _e;
    var _f = (0, Link_styles_1.default)({
        variant: variant,
        iconPosition: iconPosition,
        textColor: textColor
    }), container = _f.container, link = _f.link;
    return (react_1.default.createElement("span", { className: container },
        react_1.default.createElement("a", { className: "".concat(className, " ").concat(link), "data-testid": testID, ref: ref, href: href, hrefLang: hrefLang, target: target }, text),
        IconComponent && IconComponent));
});
exports.default = Link;
//# sourceMappingURL=Link.js.map