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
var Drawer_styles_1 = __importDefault(require("./Drawer.styles"));
var Drawer = react_1.default.forwardRef(function (_a, ref) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, testID = _a.testID, props = __rest(_a, ["className", "testID"]);
    var _c = (0, Drawer_styles_1.default)(props), overlayContainer = _c.overlayContainer, drawer = _c.drawer;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", __assign({ className: "".concat(className, " ").concat(drawer), "data-testid": testID, ref: ref }, props)),
        react_1.default.createElement("div", { className: overlayContainer })));
});
exports.default = Drawer;
//# sourceMappingURL=Drawer.js.map