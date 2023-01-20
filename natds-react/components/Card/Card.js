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
var Card_styles_1 = __importDefault(require("./Card.styles"));
var Card = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.elevation, elevation = _b === void 0 ? true : _b, _c = _a.radius, radius = _c === void 0 ? true : _c, testID = _a.testID, _d = _a.className, className = _d === void 0 ? '' : _d, props = __rest(_a, ["children", "elevation", "radius", "testID", "className"]);
    var card = (0, Card_styles_1.default)({ elevation: elevation, radius: radius }).card;
    return (react_1.default.createElement("div", __assign({ className: "".concat(className, " ").concat(card), "data-testid": testID, ref: ref }, props), children));
});
exports.default = Card;
//# sourceMappingURL=Card.js.map