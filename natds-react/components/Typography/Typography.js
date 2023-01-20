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
var react_1 = __importStar(require("react"));
var Typography_styles_1 = __importDefault(require("./Typography.styles"));
var Typography = react_1.default.forwardRef(function (props, ref) {
    var _a = props.variant, variant = _a === void 0 ? 'body1' : _a, rest = __rest(props, ["variant"]);
    var text = (0, Typography_styles_1.default)({ variant: variant }).text;
    var _b = (0, react_1.useState)('p'), CustomTag = _b[0], setCustomTag = _b[1];
    (0, react_1.useEffect)(function () {
        var suffix = variant[variant.length - 1];
        var nameElement;
        if (variant.includes('heading')) {
            nameElement = "h".concat(suffix);
        }
        else if (variant === 'caption' || variant === 'overline') {
            nameElement = 'span';
        }
        else {
            nameElement = 'p';
        }
        setCustomTag(nameElement);
    }, [variant]);
    return (react_1.default.createElement("div", __assign({ ref: ref }, rest),
        react_1.default.createElement(CustomTag, { className: text }, props.children)));
});
exports.default = Typography;
//# sourceMappingURL=Typography.js.map