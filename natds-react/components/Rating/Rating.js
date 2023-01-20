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
exports.renderVariant = void 0;
var react_1 = __importDefault(require("react"));
var RatingInput_1 = __importDefault(require("./RatingInput"));
var RatingCounter_1 = __importDefault(require("./RatingCounter"));
var RatingReadOnly_1 = __importDefault(require("./RatingReadOnly"));
var Rating_styles_1 = require("./Rating.styles");
var renderVariant = function (props) {
    var variant = props.variant;
    var types = {
        input: react_1.default.createElement(RatingInput_1.default, __assign({}, props)),
        counter: react_1.default.createElement(RatingCounter_1.default, __assign({}, props)),
        'read-only': react_1.default.createElement(RatingReadOnly_1.default, __assign({}, props))
    };
    return types[variant];
};
exports.renderVariant = renderVariant;
var Rating = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, props = __rest(_a, ["className"]);
    var container = (0, Rating_styles_1.useContainerStyles)(props).container;
    return (react_1.default.createElement("div", { className: "".concat(className, " ").concat(container) }, (0, exports.renderVariant)(__assign({}, props))));
};
exports.default = Rating;
//# sourceMappingURL=Rating.js.map